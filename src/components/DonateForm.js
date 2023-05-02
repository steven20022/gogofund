import { Button, Form, Input, InputNumber, message } from "antd";
import { Content } from "antd/es/layout/layout";
import { Auth, DataStore } from "aws-amplify";
import React, { useEffect, useState } from "react";
import { Donation } from "../models";
import StripeCheckout from 'react-stripe-checkout'

const stripe = require('stripe')('sk_test_51MvhnUIk1O3K7lNJEzcIZnrUR3kuLarZEwwj7gDVxGqbUJIWUCiL59ahKIxFhu9x2bIOE6b7qzAGdigv7gPjQHnP00OStoGvdl')

const DonateFormComponent = (props) => {
    console.log(props);
    const [form] = Form.useForm();

    const tempUser = {
        attributes: {
            email: ''
        }
    }

    const name = Form.useWatch('donatorName', form)
    const [amount, setAmount] = useState(0);

    const [user, setUser] = useState(tempUser);

    useEffect(() => {
        Auth.currentAuthenticatedUser().then((user) => setUser(user));
      }, [])

    const layout = {
        labelcol: { span: 8 },
        wrappercol: { span: 16 },
    };
    
    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    };

    console.log(name);
    console.log(amount);
    console.log(user.attributes.email);

    const onToken = async (token) => {
        console.log(token);
        const charge = await stripe.charges.create({
            amount: amount*100,
            currency: 'usd',
            source: token.id
        }).then( async (charge)  => {
            if (charge.paid) {
                await DataStore.save(
                    new Donation({
                        "donationAmount": parseInt(amount),
                        "donatorName": name,
                        "sub": user.username,
                        "fundraiserID": props.fund[0].id
                    })
                ).then(() => {
                    message.success('Donation Successful') 
                    window.location.reload(true)
            }).catch((e) =>{console.log(e);})
            } 
        }).catch((e) => message.error("Card Failed!!"))
        console.log(charge);
    }

    return (
        <Content>
            
                <Form form={form} {...layout}  name='Donation Form' autoComplete="off" layout='vertical'>
                    <Form.Item name="donatorName" label={<label style={{color: 'white'}}>Donator's Name</label>} required>
                        <Input />
                    </Form.Item>
                    <Form.Item name="donationAmount"  label={<label style={{color: 'white'}}>Donation Amount</label>} required>
                        <InputNumber min={1} value={amount} onChange={(value) => setAmount(value)} />
                    </Form.Item>
                    <Form.Item hidden={name ==='' || name === undefined || amount === 0 || amount === null } {...tailLayout}>
                        <StripeCheckout  
                            alipay
                            bitcoin
                            email={user.attributes.email}
                            token={onToken}
                            currency="USD"
                            name={`Donation for ${props.fund[0].title}`}
                            amount={amount*100}
                            stripeKey="pk_test_51MvhnUIk1O3K7lNJcodnVw7btQUs0UbG00LedY3n3yAcdABvS02SmQSmeFnPm8nuG7tm5y3jJl9HOe3WpGyPEHnf00YNCKBHBH"
                        />
                    </Form.Item>
                </Form>
        </Content>
    );
      
}

export default DonateFormComponent