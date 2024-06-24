import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Flex, Form, Input } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        navigate('/dashboard');
    };

    return (
        <article style={{ display: 'grid', gridTemplateColumns: '2fr 580px', height: '100%' }}>
            <Flex
                align="center"
                justify="center"
                style={{
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
            </Flex>
            <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ width: 300 }}>
                    <h2 style={{ fontSize: 26, fontWeight: 'bold', marginBottom: 3 }}>Hello Again!</h2>
                    <p style={{ fontSize: 18, marginBottom: 40 }}>Welcome Back</p>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                    >
                        <Form.Item name="username" rules={[{ required: true, message: 'Please input your Username!' }]}>
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item name="password" rules={[{ required: true, message: 'Please input your Password!' }]}>
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <a className="login-form-forgot" href="">
                                Forgot password
                            </a>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>
                            Or <Link to="/signup">register now!</Link>
                        </Form.Item>
                    </Form>
                </div>
            </section>
        </article>
    );
}
