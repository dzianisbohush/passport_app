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
    sharePassword(userEmail, emails, items);
  };

  render() {
    const { visible, users } = this.props;
    return (
      <Modal visible={visible} onOk={this.handleSubmit}>
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
