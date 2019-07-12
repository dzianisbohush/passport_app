import React, { Component } from 'react';
import { Table } from 'antd';
import PropTypes from 'prop-types';

import PasswordButtons from 'common/pages/home/components/PasswordButtons';
import TableActionsButtons from 'common/pages/home/components/TableActionsButtons';
import DeleteModal from 'common/blocks/DeleteModal';
import ShareModal from 'common/pages/home/components/ShareModal';
import getUsers from 'common/api/getUsers';

import { TableWrapper, ExpandedRows } from './styles';

class TableBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActiveShareBtn: false,
      isDeleteModalVisible: false,
      isShareModalVisible: false,
      itemIdToDelete: null,
      passwordsToShare: [],
      users: [],
    };
  }

  componentDidMount() {
    const users = getUsers();
    const isMobile = document.documentElement.clientWidth <= 600;
    this.setState({
      isMobile,
      users,
    });
  }

  handleRowSelected = (row, isSelected) => {
    const { passwordsToShare } = this.state;
    if (isSelected) {
      this.setState({
        isActiveShareBtn: true,
        passwordsToShare: [...passwordsToShare, row],
      });
    } else {
      const index = passwordsToShare.findIndex(elem => elem.id === row.id);
      passwordsToShare.splice(index, 1);
      this.setState({
        isActiveShareBtn: false,
        passwordsToShare,
      });
    }
  };

  handleAllRowsSelected = (isSelected, rows) => {
    if (isSelected) {
      this.setState({
        isActiveShareBtn: true,
        passwordsToShare: rows,
      });
    } else {
      this.setState({
        isActiveShareBtn: false,
        passwordsToShare: [],
      });
    }
  };

  handleDeleteClick = e => {
    e.preventDefault();
    const { id } = e.target.dataset;
    this.setState({
      isDeleteModalVisible: true,
      itemIdToDelete: id,
    });
  };

  handleDeleteModalDismiss = () => {
    this.setState({
      isDeleteModalVisible: false,
    });
  };

  handleDeleteModalSubmit = () => {
    const { deletePasswordItem } = this.props;
    const { itemIdToDelete } = this.state;
    this.setState({
      isDeleteModalVisible: false,
      itemIdToDelete: null,
    });
    deletePasswordItem(itemIdToDelete);
  };

  handleShareButtonClick = () => {
    this.setState({
      isShareModalVisible: true,
    });
  };

  getColumns = () => {
    const { goToEditPage } = this.props;

    return [
      {
        title: 'name',
        dataIndex: 'name',
      },
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
      {
        title: 'actions',
        render: record => (
          <TableActionsButtons
            goToEditPage={goToEditPage}
            itemId={record.id}
            handleDeleteClick={this.handleDeleteClick}
          />
        ),
      },
    ];
  };

  render() {
    const {
      isMobile,
      isActiveShareBtn,
      isDeleteModalVisible,
      isShareModalVisible,
      passwordsToShare,
      users,
    } = this.state;
    const { loading, items, goToAddPage, goToEditPage } = this.props;
    const records = items.filter(elem => elem.isAccepted);
    const columns = this.getColumns();
    return (
      <TableWrapper>
        <PasswordButtons
          isActiveShareBtn={isActiveShareBtn}
          goToAddPage={goToAddPage}
          handleShareButtonClick={this.handleShareButtonClick}
        />
        {isMobile ? (
          <Table
            rowSelection={{
              onSelect: this.handleRowSelected,
              onSelectAll: this.handleAllRowsSelected,
            }}
            columns={[
              {
                title: 'name',
                dataIndex: 'name',
              },
            ]}
            expandedRowRender={record => (
              <ExpandedRows>
                <div>
                  <b>Resource: </b>
                  {record.resourceAddress}
                </div>
                <div>
                  <b>login: </b>
                  {record.login}
                </div>
                <div>
                  <b>password: </b>
                  {record.password}
                </div>
                <div>
                  {
                    <TableActionsButtons
                      goToEditPage={goToEditPage}
                      itemId={record.id}
                      handleDeleteClick={this.handleDeleteClick}
                    />
                  }
                </div>
              </ExpandedRows>
            )}
            dataSource={records}
            loading={loading}
            rowKey="id"
            pagination={{
              defaultCurrent: 1,
              total: records.length,
              hideOnSinglePage: true,
              pageSize: 5,
            }}
          />
        ) : (
          <Table
            rowSelection={{
              onSelect: this.handleRowSelected,
              onSelectAll: this.handleAllRowsSelected,
            }}
            columns={columns}
            dataSource={records}
            loading={loading}
            rowKey="id"
            pagination={{
              defaultCurrent: 1,
              total: records.length,
              hideOnSinglePage: true,
              pageSize: 5,
            }}
          />
        )}
        <DeleteModal
          isVisible={isDeleteModalVisible}
          handleDeleteModalSubmit={this.handleDeleteModalSubmit}
          handleDeleteModalDismiss={this.handleDeleteModalDismiss}
        />
        {users.length && (
          <ShareModal
            visible={isShareModalVisible}
            users={users}
            passwordsToShare={passwordsToShare}
          />
        )}
      </TableWrapper>
    );
  }
}

TableBlock.propTypes = {
  loading: PropTypes.bool.isRequired,
  items: PropTypes.arrayOf(
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
  goToEditPage: PropTypes.func.isRequired,
  goToAddPage: PropTypes.func.isRequired,
  deletePasswordItem: PropTypes.func.isRequired,
};

export default TableBlock;
