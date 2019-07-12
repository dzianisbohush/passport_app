import styled from 'styled-components';

const ActionButtons = styled.div`
  margin: 10px;
  & > button {
    margin: 10px;
  }
  @media only screen and (max-width: 600px) {
    display: flex;
    margin: 0px -10px;
    align-items: center;
  }
`;

export default ActionButtons;
