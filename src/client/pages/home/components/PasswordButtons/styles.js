import styled from 'styled-components';

export const StyledButtons = styled.div`
  margin: ${props => props.theme.spacingUnit * 2}px 0px;
  text-align: right;
  & > button {
    margin-left: ${props => props.theme.spacingUnit * 2}px;
  }
  @media only screen and (max-width: 600px) {
    text-align: center;
  }
`;

export const StyledIcon = styled.span`
  margin-left: 7px;
`;
