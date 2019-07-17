import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Modal, Upload, Button, Icon } from 'antd';

class UploadFileModal extends PureComponent {
  state = {
    fileList: [],
    uploading: false,
  };

  handleUpload = () => {
    const { fileList } = this.state;
    const { userEmail, uploadPasswordsInCSV, closeModal } = this.props;
    const formData = new FormData();

    formData.append('file', fileList[0]);
    formData.set('userEmail', userEmail);
    uploadPasswordsInCSV(formData, userEmail);
    // eslint-disable-next-line no-unused-vars
    this.setState(state => {
      return {
        fileList: [],
        uploading: false,
      };
    });
    closeModal();
  };

  handleRemoveFile = () => {
    this.setState({ fileList: [] });
  };

  handleBeforeUpload = file => {
    this.setState({
      fileList: [file],
    });
    return false;
  };

  handleCancel = () => {
    const { closeModal } = this.props;

    closeModal();
  };

  render() {
    const { visible } = this.props;
    const { uploading, fileList } = this.state;

    return (
      <Modal
        title="Select CSV file for uploading"
        visible={visible}
        onCancel={this.handleCancel}
        footer={false}
      >
        <div>
          <Upload
            onRemove={this.handleRemoveFile}
            beforeUpload={this.handleBeforeUpload}
            fileList={fileList}
          >
            <Button>
              <Icon type="upload" /> Select File
            </Button>
          </Upload>
          <Button
            type="primary"
            onClick={this.handleUpload}
            disabled={fileList.length === 0}
            loading={uploading}
            style={{ marginTop: 16 }}
          >
            {uploading ? 'Uploading' : 'Start Upload'}
          </Button>
        </div>
      </Modal>
    );
  }
}

UploadFileModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  uploadPasswordsInCSV: PropTypes.func.isRequired,
  userEmail: PropTypes.string.isRequired,
};

export default UploadFileModal;
