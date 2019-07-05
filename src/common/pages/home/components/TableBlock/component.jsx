import React, { Component } from 'react';
import { Table, Button } from 'antd';

import PasswordButtons from 'common/pages/home/components/PasswordButtons';
import { TableWrapper, ActionButtons } from './styles';

const columns = [
  {
    title: 'name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'resource',
    dataIndex: 'resource',
    render: () => {
      return (
        <a href="https://www.google.com">
          <img srcSet="https://www.google.com/favicon.ico" alt="icon" />
        </a>
      );
    },
  },
  {
    title: 'login',
    dataIndex: 'login',
    key: 'login',
  },
  {
    title: 'passwords',
    key: 'passwords',
    dataIndex: 'passwords',
  },
  {
    title: 'actions',
    key: 'actions',
    render: () => (
      <ActionButtons>
        <Button type="primary">Edit</Button>
        <Button type="danger">Delete</Button>
      </ActionButtons>
    ),
  },
];

class TableBlock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isChecked: false,
    };
    this.handleRowSelected = this.handleRowSelected.bind(this);
  }

  handleRowSelected() {
    const { isChecked } = this.state;
    this.setState({
      isChecked: !isChecked,
    });
  }

  render() {
    const { isChecked } = this.state;
    return (
      <TableWrapper>
        <PasswordButtons isChecked={isChecked} />
        <Table
          rowSelection={{
            onSelect: this.handleRowSelected,
            onSelectAll: this.handleRowSelected,
          }}
          columns={columns}
          dataSource={[{ name: 'andrew' }]}
          bordered
        />
      </TableWrapper>
    );
  }
}

export default TableBlock;
