import styled from 'styled-components';

export const SharePassword = styled.div`
  margin: ${props => props.theme.spacingUnit * 5}px
    ${props => props.theme.spacingUnit * 3}%;
  width: ${props => props.theme.width}%;
  border: 1.5px solid ${props => props.theme.borderColor};
  background-color: ${props => props.theme.backgroundColor};
  padding: 0px ${props => props.theme.spacingUnit / 2}%;

  & > h3 {
    text-align: center;
    margin: ${props => props.theme.spacingUnit}px 0px;
  }

  @media only screen and (max-width: 600px) {
    margin: 0px;
    padding: 0px ${props => props.theme.spacingUnit}%;
    width: ${props => props.theme.width * 2}%;
  }
`;

export const ButtonsWrapper = styled.div`
  & > button {
    margin: ${props => props.theme.spacingUnit / 2}px
      ${props => props.theme.spacingUnit * 4}px;
  }
  text-align: center;
`;

export const TablesWrapper = styled.div`
  margin: ${props => props.theme.spacingUnit * 5}px;
  & > h2 {
    text-align: center;
    margin: ${props => props.theme.spacingUnit * 5}px;
  }
  & > div {
    margin: ${props => props.theme.spacingUnit * 5}px auto;
    width: ${props => props.theme.width}%;
  }
  @media only screen and (max-width: 600px) {
    & > h2 {
      margin: ${props => props.theme.spacingUnit * 5}px 0px;
    }
    margin: 0px;
    & > div {
      margin: ${props => props.theme.spacingUnit * 5}px 0px;
      width: ${props => props.theme.width * 2}%;
    }
  }
`;
