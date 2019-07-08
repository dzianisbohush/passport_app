import React, { PureComponent } from 'react';
import { Form, Input, Button } from 'antd';
import PropTypes from 'prop-types';

import WrappedForm from './styles';

class PasswordForm extends PureComponent {
  handleSubmit = e => {
    e.preventDefault();
    // eslint-disable-next-line react/prop-types
    const { addPasswordItem, form } = this.props;
    form.validateFields((err, values) => {
      if (!err) {
        addPasswordItem(values);
      }
    });
  };

  render() {
    const { id, name, resourceAddress, login, form } = this.props;
    const { getFieldDecorator } = form;
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
          <Form.Item label="resourceAddress">
            {getFieldDecorator('resourceAddress', {
              initialValue: resourceAddress,
              rules: [
                { required: true, message: 'Please input resource address!' },
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

PasswordForm.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  resourceAddress: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
  form: PropTypes.node.isRequired,
};

const WrappedPasswordForm = Form.create({ name: 'password from' })(
  PasswordForm,
);

export default WrappedPasswordForm;
