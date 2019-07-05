import React from 'react';
import { Table, Button } from 'antd';

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

const TableBlock = () => {
  return (
    <TableWrapper>
      <Table rowSelection={{}} columns={columns} dataSource={[]} bordered />
    </TableWrapper>
  );
};

export default TableBlock;
