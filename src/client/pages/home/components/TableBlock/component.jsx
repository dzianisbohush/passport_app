import React, { Component } from 'react';
import { Table } from 'antd';
import PropTypes from 'prop-types';
import PasswordButtons from 'client/pages/home/components/PasswordButtons';
import TableActionsButtons from 'client/pages/home/components/TableActionsButtons';

import { TableWrapper, ExpandedRows } from './styles';

class TableBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false,
    };
  }

  componentDidMount() {
    const isMobile = document.documentElement.clientWidth <= 600;
    this.setState({
      isMobile,
    });
  }

  getColumns = () => {
    const { goToEditPage, handleDeleteClick } = this.props;

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
            handleDeleteClick={handleDeleteClick}
          />
        ),
      },
    ];
  };

  render() {
    const { isMobile } = this.state;
    const {
      loading,
      items,
      goToAddPage,
      goToEditPage,
      isActiveShareBtn,
      handleShareButtonClick,
      handleRowSelected,
      handleAllRowsSelected,
      handleDeleteClick,
    } = this.props;
    const records = items.filter(elem => elem.isAccepted);
    const columns = this.getColumns();

    return (
      <TableWrapper>
        <PasswordButtons
          isActiveShareBtn={isActiveShareBtn}
          goToAddPage={goToAddPage}
          handleShareButtonClick={handleShareButtonClick}
        />
        {isMobile ? (
          <Table
            rowSelection={{
              onSelect: handleRowSelected,
              onSelectAll: handleAllRowsSelected,
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
                      handleDeleteClick={handleDeleteClick}
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
              onSelect: handleRowSelected,
              onSelectAll: handleAllRowsSelected,
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
      </TableWrapper>
    );
  }
}

TableBlock.propTypes = {
  loading: PropTypes.bool.isRequired,
  isActiveShareBtn: PropTypes.bool.isRequired,
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
  handleShareButtonClick: PropTypes.func.isRequired,
  handleRowSelected: PropTypes.func.isRequired,
  handleAllRowsSelected: PropTypes.func.isRequired,
  handleDeleteClick: PropTypes.func.isRequired,
};

export default TableBlock;
