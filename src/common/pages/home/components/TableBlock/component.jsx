import React, { Component } from 'react';
import { Table } from 'antd';
import PropTypes from 'prop-types';
import PasswordButtons from 'common/pages/home/components/PasswordButtons';
import TableActionsButtons from 'common/pages/home/components/TableActionsButtons';
import TableWrapper from './styles';

class TableBlock extends Component {
  state = {
    isActiveShareBtn: false,
  };

  handleRowSelected = () => {
    const { isActiveShareBtn } = this.state;

    this.setState({
      isActiveShareBtn: !isActiveShareBtn,
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
          <TableActionsButtons goToEditPage={goToEditPage} itemId={record.id} />
        ),
      },
    ];
  };

  render() {
    const { isActiveShareBtn } = this.state;
    const { loading, items, goToAddPage } = this.props;
    const columns = this.getColumns();

    return (
      <TableWrapper>
        <PasswordButtons
          isActiveShareBtn={isActiveShareBtn}
          goToAddPage={goToAddPage}
        />
        <Table
          rowSelection={{
            onSelect: this.handleRowSelected,
            onSelectAll: this.handleRowSelected,
          }}
          columns={columns}
          dataSource={items}
          loading={loading}
          rowKey="id"
          pagination={{
            defaultCurrent: 1,
            total: items.length,
            hideOnSinglePage: true,
            pageSize: 5,
          }}
        />
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
};

export default TableBlock;
