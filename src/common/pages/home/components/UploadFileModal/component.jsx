import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Modal, Upload, Button, Icon, Checkbox } from 'antd';

import CheckboxWrapper from './styles';

class UploadFileModal extends PureComponent {
  state = {
    fileList: [],
    uploading: false,
    needRewrite: false,
  };

  handleUpload = () => {
    const { fileList, needRewrite } = this.state;
    const { userEmail, uploadPasswordsInCSV } = this.props;
    const formData = new FormData();

    formData.append('file', fileList[0]);
    formData.set('userEmail', userEmail);
    formData.set('needRewrite', needRewrite);
    uploadPasswordsInCSV(formData, userEmail);
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

  handleCheckboxClick = () => {
    const { needRewrite } = this.state;

    this.setState({
      needRewrite: !needRewrite,
    });
  };

  render() {
    const { visible } = this.props;
    const { uploading, fileList, needRewrite } = this.state;

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
          <CheckboxWrapper>
            <Checkbox checked={needRewrite} onChange={this.handleCheckboxClick}>
              Rewrite
            </Checkbox>
          </CheckboxWrapper>
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
