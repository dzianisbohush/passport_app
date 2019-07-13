import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Modal, Select } from 'antd';

class ShareModal extends PureComponent {
  state = {
    emailsForSharing: [],
  };

  onSelect = value => {
    const { emailsForSharing } = this.state;

    this.setState({
      emailsForSharing: [...emailsForSharing, value],
    });
  };

  handleSubmit = () => {
    const { emailsForSharing } = this.state;
    const {
      userEmail,
      closeModal,
      passwordsToShare,
      sharePasswords,
    } = this.props;

    if (!emailsForSharing.length) {
      Modal.info({ title: 'Please select users emails for sharing passwords' });

      return;
    }

    sharePasswords(userEmail, emailsForSharing, passwordsToShare);

    closeModal();
  };

  handleCancel = () => {
    const { closeModal } = this.props;

    closeModal();
  };

  render() {
    const { users, visible } = this.props;

    return (
      <Modal
        title="Select users emails for sharing passwords"
        visible={visible}
        onOk={this.handleSubmit}
        okText="Share"
        onCancel={this.handleCancel}
      >
        <Select
          mode="multiple"
          placeholder="Select emails"
          onSelect={this.onSelect}
          size="large"
          style={{ minWidth: '200px' }}
        >
          {users.map(elem => {
            return <Select.Option key={elem.email}>{elem.email}</Select.Option>;
          })}
        </Select>
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
