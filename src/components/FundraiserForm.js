import { Button, Form, Input, InputNumber, message } from "antd";
import { Content } from "antd/es/layout/layout";
import { Auth, DataStore } from "aws-amplify";
import React, { useEffect, useState } from "react";
import { Fundraiser } from "../models";

const FundraiserFormComponent = (props) => {
    console.log(props);
    const [form] = Form.useForm();

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
            new Fundraiser({
                "title": values.title,
                "description": values.description,
                "endDate": values.endDate,
                "fundGoal": values.fundGoal,
                "Donations": [],
                "sub": user.username
            })
        ).then(() => {
            message.success('Donation Successful')
            window.location.reload(true)
    }).catch((error) => {
        message.error('Donation Unseccessful' + error)
    })
    } 

    return (
        <Content style={{margin: '10px'}}>
            
                <Form form={form} {...layout} name='Donation Form' autoComplete="off" layout='vertical' onFinish={onFinish}>
                    <Form.Item name="title"  label="Fundraiser Title" required>
                        <Input />
                    </Form.Item>
                    <Form.Item name="description"  label="Fundraiser Description" required>
                        <Input />
                    </Form.Item>
                    <Form.Item name="endDate"  label="Fundraiser End Date" required>
                        <Input type="date"/>
                    </Form.Item>
                    <Form.Item name="fundGoal"  label="Fundraiser Goal (Dollar's)" required>
                        <InputNumber min={1} />
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                        <Button type='primary' htmlType='submit'>
                            Create
                        </Button>
                    </Form.Item>
                </Form>
        </Content>
    );
      
}

export default FundraiserFormComponent