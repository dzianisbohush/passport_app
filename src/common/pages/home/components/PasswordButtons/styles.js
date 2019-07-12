import styled from 'styled-components';

export const StyledButtons = styled.div`
  margin: 20px 0px;
  text-align: right;
  & > button {
    margin-left: 20px;
  }
  @media only screen and (max-width: 600px) {
    text-align: center;
  }
`;

export const StyledIcon = styled.span`
  margin-left: 7px;
`;
