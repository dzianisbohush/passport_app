import React, { Component } from 'react';
import { Button, Table } from 'antd';
import PropTypes from 'prop-types';

import { SharePassword, ButtonsWrapper } from './styles';

class passwordsStatusControlPage extends Component {
  handleAcceptPassword = () => {
    const { acceptPassword } = this.props;

    acceptPassword();
  };

  handleDeclinePassword = () => {
    const { declinePassword } = this.props;

    declinePassword();
  };

  render() {
    const { passwordsForAccepting } = this.props;
    return (
      <div>
        <SharePassword>
          <h3>Would you like to accept password ?</h3>
          <Table
            columns={[
              {
                title: 'resource',
                dataIndex: 'resourceAddress',
              },
              {
                title: 'login',
                dataIndex: 'login',
              },
              {
                title: 'password',
                dataIndex: 'password',
              },
            ]}
            dataSource={passwordsForAccepting}
            pagination={false}
          />
          <ButtonsWrapper>
            <Button onClick={this.handleAcceptPassword} type="primary">
              Yes
            </Button>
            <Button onClick={this.handleDeclinePassword} type="danger">
              No
            </Button>
          </ButtonsWrapper>
        </SharePassword>
      </div>
    );
  }
}

passwordsStatusControlPage.propTypes = {
  declinePassword: PropTypes.func.isRequired,
  acceptPassword: PropTypes.func.isRequired,
  passwordsForAccepting: PropTypes.arrayOf(
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
};

export default passwordsStatusControlPage;
