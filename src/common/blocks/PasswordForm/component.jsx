import React, { PureComponent } from 'react';
import { Form, Input, Button } from 'antd';
import PropTypes from 'prop-types';
import MESSAGES from 'common/constants';
import WrappedForm from './styles';

class PasswordForm extends PureComponent {
  handleSubmit = e => {
    e.preventDefault();
    const { submitAction, form } = this.props;

    form.validateFields((err, values) => {
      if (!err) {
        submitAction(values);
      }
    });
  };

  render() {
    const { title, name, resourceAddress, login, form } = this.props;
    const { getFieldDecorator } = form;

    return (
      <WrappedForm>
        <h2>{title}</h2>
        <Form layout="vertical">
          <Form.Item label="name">
            {getFieldDecorator('name', {
              initialValue: name,
              rules: [{ required: true, message: MESSAGES.EMPTY_NAME }],
            })(<Input />)}
          </Form.Item>
          <Form.Item label="resourceAddress">
            {getFieldDecorator('resourceAddress', {
              initialValue: resourceAddress,
              rules: [
                { required: true, message: MESSAGES.EMPTY_RESOURCE_ADDRESS },
              ],
            })(<Input />)}
          </Form.Item>
          <Form.Item label="login">
            {getFieldDecorator('login', {
              initialValue: login,
              rules: [{ required: true, message: MESSAGES.EMPTY_LOGIN }],
            })(<Input />)}
          </Form.Item>
          <Form.Item label="password">
            {getFieldDecorator('password', {
              rules: [{ required: true, message: MESSAGES.EMPTY_PASSWORD }],
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

PasswordForm.defaultProps = {
  name: '',
  resourceAddress: '',
  login: '',
};

PasswordForm.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string.isRequired,
  resourceAddress: PropTypes.string,
  login: PropTypes.string,
  form: PropTypes.node.isRequired,
  submitAction: PropTypes.func.isRequired,
};

const WrappedPasswordForm = Form.create({ name: 'password from' })(
  PasswordForm,
);

export default WrappedPasswordForm;
