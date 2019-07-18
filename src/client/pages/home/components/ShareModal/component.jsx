import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Modal, Select } from 'antd';

import SelectWrapper from './styles';

class ShareModal extends PureComponent {
  state = {
    emailsForSharing: [],
  };

  handleSelect = value => {
    const { emailsForSharing } = this.state;

    this.setState({
      emailsForSharing: [...emailsForSharing, value],
    });
  };

  handleDeselect = value => {
    const { emailsForSharing } = this.state;
    const emails = emailsForSharing;

    const indexOfValue = emails.indexOf(value);

    if (indexOfValue > -1) {
      emails.splice(indexOfValue, 1);

      this.setState({
        emailsForSharing: [...emails],
      });
    }
  };

  handleSubmit = () => {
    const { emailsForSharing } = this.state;
    const {
      userEmail,
      passwordsToShare,
      sharePasswords,
      closeModal,
    } = this.props;

    if (!emailsForSharing.length) {
      Modal.info({ title: 'Please select users emails for sharing passwords' });

      return;
    }

    sharePasswords(userEmail, emailsForSharing, passwordsToShare);
    this.clearEmailForSharing();
    closeModal();
  };

  clearEmailForSharing = () => {
    this.setState({
      emailsForSharing: [],
    });
  };

  handleCancel = () => {
    const { closeModal } = this.props;
    this.clearEmailForSharing();

    closeModal();
  };

  render() {
    const { users, visible } = this.props;
    const { emailsForSharing } = this.state;

    return (
      <Modal
        title="Select users emails for sharing passwords"
        visible={visible}
        onOk={this.handleSubmit}
        okText="Share"
        onCancel={this.handleCancel}
      >
        <SelectWrapper>
          <Select
            value={emailsForSharing}
            mode="multiple"
            placeholder="Select emails"
            onSelect={this.handleSelect}
            onDeselect={this.handleDeselect}
            size="large"
          >
            {users.map(elem => {
              return (
                <Select.Option key={elem.email}>{elem.email}</Select.Option>
              );
            })}
          </Select>
        </SelectWrapper>
      </Modal>
    );
  }
}

ShareModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  passwordsToShare: PropTypes.arrayOf(
    PropTypes.shape({
      createdAt: PropTypes.string,
      id: PropTypes.number,
      login: PropTypes.string,
      name: PropTypes.string,
      password: PropTypes.string,
      resourceAddress: PropTypes.string,
      sendNotificationAt: PropTypes.string,
      updatedAt: PropTypes.string,
      userId: PropTypes.number,
    }),
  ).isRequired,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      googleId: PropTypes.string,
      email: PropTypes.string,
      name: PropTypes.string,
      img: PropTypes.string,
      createdAt: PropTypes.string,
      updatedAt: PropTypes.string,
    }),
  ).isRequired,
  userEmail: PropTypes.string.isRequired,
  sharePasswords: PropTypes.func.isRequired,
};

export default ShareModal;
