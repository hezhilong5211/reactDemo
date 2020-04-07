import React from 'react'
import './login.less'
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';


export default class login extends React.Component {



    render() {
        return (
            <div className="login">
                <header className="login-header">
                    <div>
                        <h1>欢迎使用react搭建中后台</h1>
                    </div>
                </header>
                <section className="login-section">
                    <h2>用户登录</h2>
                    <div>
                        <Form
                            name="normal_login"
                            className="login-form"
                        >
                            <Form.Item
                                name="username"
                                rules={[{ required: true, message: 'Please input your Username!' }]}
                            >
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: 'Please input your Password!' }]}
                            >
                                <Input
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="Password"
                                />
                            </Form.Item>
                            <Form.Item>
                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                </Form.Item>
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    Log in
        </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </section>
            </div>
        )
    }
}