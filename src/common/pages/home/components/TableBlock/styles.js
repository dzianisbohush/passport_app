import styled from 'styled-components';

export const TableWrapper = styled.div`
  margin: 50px;
`;

export const ExpandedRows = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  & > div {
    margin: 10px;
  }
`;
