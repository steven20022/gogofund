import { Button, Form, Input, Modal, message } from "antd";
import { Content } from "antd/es/layout/layout";
import { Auth, DataStore } from "aws-amplify";
import React, { useEffect, useState } from "react";
import { Donation } from "../models";

const DonateFormComponent = (props) => {
    console.log(props);
    const [form] = Form.useForm();

    const [open, setOpen] = useState(false)
    const [name, setName] = useState("");
    const [amount, setAmount] = useState(0);

    const [user, setUser] = useState({});

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

    const onFinish = async (values) => {
        await DataStore.save(
            new Donation({
                "donationAmount": parseInt(values.donationAmount),
                "donatorName": values.donatorName,
                "sub": user.username,
                "fundraiserID": props.fund[0].id
            })
        ).then(() => {
            message.success('Donation Successful') 
            setOpen(false)
    })
    } 

    return (
        <Content>
            <Button onClick={() => setOpen(true)}>
                <p>Donate Now</p>
            </Button>
            <Modal open={open}  onCancel={() => setOpen(false)} onOk={() => setOpen(false)} footer={[]}>
                <Form form={form} {...layout} name='Donation Form' autoComplete="off" layout='vertical' onFinish={onFinish}>
                    <Form.Item name="donatorName"  label="Donator's Name" required>
                        <Input value={name} onChange={setName} />
                    </Form.Item>
                    <Form.Item name="donationAmount"  label="Donation Amount" required>
                        <Input value={amount} onChange={setAmount} />
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                        <Button type='primary' htmlType='submit'>
                            Donate
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </Content>
    );
      
}

export default DonateFormComponent