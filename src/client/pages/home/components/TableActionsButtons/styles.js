import styled from 'styled-components';

const ActionButtons = styled.div`
  margin: ${props => props.theme.spacingUnit}px;
  & > button {
    margin: ${props => props.theme.spacingUnit}px;
  }
  @media only screen and (max-width: 600px) {
    display: flex;
    margin: 0px -${props => props.theme.spacingUnit}px;
    align-items: center;
  }
`;

export default ActionButtons;
