import React from 'react'
import './login.less'
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';


export default class login extends React.Component {

    //对密码进行自定义验证
    validatePwd = (rule, value, callback) => {
        //callback 必须背调
        if (value === '') {
            callback('请输入密码');
        } else if (value.length < 4) {
            callback('密码长度不能小于4')
        } else if (value.length > 12) {
            callback('密码的长度不能大于12')
        } else if (!/^[a-zA-Z0-9_]+$/.test(value)) {
            callback('mima')
        } else {
            callback()
        }
        // callback()
        // callback('验证失败')
    }

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
                    <Form
                        name="normal_login"
                        className="login-form"
                    >
                        <Form.Item
                            name="username"
                            //声明示验证 直接用别人写好的代码规则进行验证
                            //自定义验证
                            rules={[
                                { required: true, message: '请输入用户名' },
                                { min: 4, message: '用户名最少4位' },
                                { max: 12, message: '用户名最多12位' },
                                { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须是英文下划线数字' }
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                { validator: this.validatePwd }
                            ]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>
                        </Form.Item>
                    </Form>
                </section>
            </div>
        )
    }
}