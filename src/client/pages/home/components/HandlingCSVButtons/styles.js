import styled from 'styled-components';

export const StyledButtons = styled.div`
  text-align: center;
  & > button {
    margin-left: ${props => props.theme.spacingUnit * 2}px;
    margin-top: ${props => props.theme.spacingUnit}px;
  }

  @media only screen and (max-width: 600px) {
    & > button {
      margin-left: 0;
    }
  }
`;

export const StyledIcon = styled.span`
  margin-left: 7px;
`;
