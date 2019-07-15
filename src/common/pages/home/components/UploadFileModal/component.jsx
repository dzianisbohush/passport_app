import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Modal, Upload, Button, Icon } from 'antd';

class UploadFileModal extends PureComponent {
  state = {
    fileList: [],
    uploading: false,
    needRewrite: false,
  };

  handleUpload = () => {
    const { fileList, needRewrite } = this.state;
    const { userEmail } = this.props;
    const formData = new FormData();

    formData.append('file', fileList[0]);
    formData.set('userEmail', userEmail);
    formData.set('needRewrite', needRewrite); // @todo add checkbox for this

    this.setState({
      uploading: true,
    });

    // @todo refactor this
    axios({
      method: 'post',
      url: '/api/files/upload',
      data: formData,
      config: { headers: { 'Content-Type': 'multipart/form-data' } },
    })
      .then(response => {
        this.setState({
          uploading: false,
        });
        Modal.info({ title: 'Passwords successfully added' });
        // @todo add update passwords table
        console.log(response);
      })
      .catch(response => {
        this.setState({
          uploading: false,
        });
        Modal.error({ title: 'Passwords did not add' });

        console.log(response);
      });
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
  userEmail: PropTypes.string.isRequired,
};

export default UploadFileModal;
