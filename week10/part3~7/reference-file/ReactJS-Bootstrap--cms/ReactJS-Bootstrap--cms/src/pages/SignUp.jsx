import React, { useState } from 'react';
import { AutoComplete, Button, Cascader, Checkbox, Col, Form, Input, InputNumber, Row, Select } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Option } = Select;

const residences = [
    {
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [
            {
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [
                    {
                        value: 'xihu',
                        label: 'West Lake',
                    },
                ],
            },
        ],
    },
    {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [
            {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                    {
                        value: 'zhonghuamen',
                        label: 'Zhong Hua Men',
                    },
                ],
            },
        ],
    },
];

export default function SignUp() {
    const navigate = useNavigate();
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        navigate('/login');
    };

    return (
        <article style={{ display: 'grid', gridTemplateColumns: '2fr 580px', height: '100%' }}>
            <section
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    background:
                        'linear-gradient(180deg, rgba(5,117,230,1) 0%, rgba(2,41,138,1) 85%, rgba(2,27,121,1) 100%)',
                }}
            >
                <div>
                    <h1 style={{ color: '#fff', fontSize: 40, fontWeight: 'bold' }}>ANTD CMS</h1>
                    <p style={{ color: '#fff', fontSize: 18, fontWeight: 500 }}>
                        Help designers/developers building beautiful products more flexible and working with happiness
                    </p>
                    <a href="https://ant.design" target="_blank" rel="noreferrer">
                        <Button type="primary">Read More</Button>
                    </a>
                </div>
            </section>
            <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ width: 300 }}>
                    <h2 style={{ fontSize: 26, fontWeight: 'bold', marginBottom: 3 }}>Hello!</h2>
                    <p style={{ fontSize: 18, marginBottom: 40 }}>Sign Up to Get Started</p>
                    <Form layout="vertical" form={form} name="register" onFinish={onFinish} scrollToFirstError>
                        <Form.Item
                            name="nickname"
                            label="Nickname"
                            tooltip="What do you want others to call you?"
                            rules={[{ required: true, message: 'Please input your nickname!', whitespace: true }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="email"
                            label="E-mail"
                            rules={[
                                {
                                    type: 'email',
                                    message: 'The input is not valid E-mail!',
                                },
                                {
                                    required: true,
                                    message: 'Please input your E-mail!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            label="Password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                            hasFeedback
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item
                            name="confirm"
                            label="Confirm Password"
                            dependencies={['password']}
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: 'Please confirm your password!',
                                },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(
                                            new Error('The new password that you entered do not match!'),
                                        );
                                    },
                                }),
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item
                            name="agreement"
                            valuePropName="checked"
                            rules={[
                                {
                                    validator: (_, value) =>
                                        value
                                            ? Promise.resolve()
                                            : Promise.reject(new Error('Should accept agreement')),
                                },
                            ]}
                        >
                            <Checkbox>
                                I have read the <a href="">agreement</a>
                            </Checkbox>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                                Register
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </section>
        </article>
    );
}
