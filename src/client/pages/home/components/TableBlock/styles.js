import styled from 'styled-components';

export const TableWrapper = styled.div`
  margin: ${props => props.theme.spacingUnit * 5}px;
`;

export const ExpandedRows = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  & > div {
    margin: ${props => props.theme.spacingUnit}px;
  }
`;
