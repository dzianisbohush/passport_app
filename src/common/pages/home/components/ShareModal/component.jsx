import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Modal, Select } from 'antd';

import sharePassword from 'common/api/sharePassword';

class ShareModal extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    const { visible } = this.props;
    this.setState({
      visible,
    });
  }

  onSelect = value => {
    const { items } = this.state;
    this.setState({
      items: [...items, value],
    });
  };

  handleSubmit = () => {
    const { items } = this.state;
    const { userEmail } = this.props;
    const emails = items.map(elem => elem.email);
    const records = items.map((elem, index) => {
      return { ...elem, userEmail: emails[index] };
    });
    sharePassword(userEmail, emails, records);
    this.setState({
      visible: false,
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const { users } = this.props;
    const { visible } = this.state;
    return (
      <Modal
        visible={visible}
        onOk={this.handleSubmit}
        onCancel={this.handleCancel}
      >
        <Select
          mode="multiple"
          placeholder="Select users"
          onSelect={this.onSelect}
          size="large"
          style={{ width: 120 }}
        >
          {users.map(elem => {
            return <Select.Option key={elem.name}>{elem.name}</Select.Option>;
          })}
        </Select>
      </Modal>
    );
  }
}

ShareModal.propTypes = {
  visible: PropTypes.bool.isRequired,
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
};

export default ShareModal;
