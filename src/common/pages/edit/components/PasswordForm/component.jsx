import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';

import WrappedForm from './styles';

class PasswordForm extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields();
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { id, name, resource, login } = this.props;
    const title = id ? 'Edit Password' : 'Create Password';
    return (
      <WrappedForm>
        <h2>{title}</h2>
        <Form layout="vertical">
          <Form.Item label="name">
            {getFieldDecorator('name', {
              initialValue: name,
              rules: [{ required: true, message: 'Please input your name!' }],
            })(<Input />)}
          </Form.Item>
          <Form.Item label="resource">
            {getFieldDecorator('resource', {
              initialValue: resource,
              rules: [
                { required: true, message: 'Please inputpassword resource!' },
              ],
            })(<Input />)}
          </Form.Item>
          <Form.Item label="login">
            {getFieldDecorator('login', {
              initialValue: login,
              rules: [{ required: true, message: 'Please input your login!' }],
            })(<Input />)}
          </Form.Item>
          <Form.Item label="password">
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Password is required!' }],
            })(<Input.Password />)}
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              onClick={this.handleSubmit}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </WrappedForm>
    );
  }
}

const WrappedPasswordForm = Form.create({ name: 'password from' })(
  PasswordForm,
);

export default WrappedPasswordForm;
