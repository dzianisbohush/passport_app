import React, { Component } from 'react';
import { Table, Button } from 'antd';
import PropTypes from 'prop-types';

import HeaderBlock from 'common/blocks/HeaderBlock';
import acceptPassword from 'common/api/acceptPassword';
import declinePassword from 'common/api/declinePassword';
import { SharePassword, ButtonsWrapper, TablesWrapper } from './styles';

class sharingPasswordPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isShare: true,
    };
  }

  handleAcceptPassword = () => {
    const { userEmail } = this.props;
    acceptPassword(userEmail);
  };

  handleDeclinePassword = () => {
    const { userEmail } = this.props;
    declinePassword(userEmail);
  };

  getColumns = () => {
    return [
      {
        title: 'name',
        dataIndex: 'name',
        render: record => {
          return record.isAccepted ? record : null;
        },
      },
      {
        title: 'email',
        dataIndex: 'email',
        render: record => {
          return record.isAccepted ? record : null;
        },
      },
    ];
  };

  render() {
    const { isShare } = this.state;
    const columns = this.getColumns();
    return (
      <div>
        <HeaderBlock />
        {isShare ? (
          <SharePassword>
            <h3>Would you like to accept password ?</h3>
            <ButtonsWrapper>
              <Button onClick={this.handleAcceptPassword}>Yes</Button>
              <Button onClick={this.handleDeclinePassword}>No</Button>
            </ButtonsWrapper>
          </SharePassword>
        ) : null}
        <TablesWrapper>
          <h2>Users who shared passwords</h2>
          <Table columns={columns} dataSource={[]} bordered />
          <h2>Users with whom you shared passwords</h2>
          <Table columns={columns} dataSource={[]} bordered />
        </TablesWrapper>
      </div>
    );
  }
}

sharingPasswordPage.propTypes = {
  userEmail: PropTypes.string.isRequired,
};

export default sharingPasswordPage;
