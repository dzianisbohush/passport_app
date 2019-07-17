import React from 'react';
import { Modal } from 'antd';
import PropTypes from 'prop-types';

const DeleteModal = props => {
  const {
    isVisible,
    handleDeleteModalDismiss,
    handleDeleteModalSubmit,
  } = props;

  return (
    <Modal
      visible={isVisible}
      onCancel={handleDeleteModalDismiss}
      onOk={handleDeleteModalSubmit}
    >
      <span>Are you sure you want to delete this item ?</span>
    </Modal>
  );
};

DeleteModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  handleDeleteModalDismiss: PropTypes.func.isRequired,
  handleDeleteModalSubmit: PropTypes.func.isRequired,
};

export default DeleteModal;
