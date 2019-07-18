import styled from 'styled-components';

export const StyledMainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  background: linear-gradient(
    135deg,
    ${props => props.theme.colors.matisse} 0%,
    ${props => props.theme.colors.mariner} 32%,
    ${props => props.theme.colors.mariner} 32%,
    ${props => props.theme.colors.curiousBlue} 50%,
    ${props => props.theme.colors.matisse} 97%,
    ${props => props.theme.colors.seagull} 100%
  );
`;

export const StyledButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLink = styled.a`
  padding: 8px 20px;
  text-decoration: none;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  font-size: ${props => props.theme.fontSize}rem;
`;

export const StyledLoginLink = styled(StyledLink)`
  background-color: ${props => props.theme.colors.cyan};
  color: ${props => props.theme.colors.white};
  &:hover {
    background-color: ${props => props.theme.colors.robinsEggBlue};
    color: ${props => props.theme.colors.white};
  }
`;

export const StyledLogoutLink = styled(StyledLink)`
  background-color: ${props => props.theme.colors.orange};
  color: ${props => props.theme.colors.white};
  margin-top: 10px;
  &:hover {
    background-color: ${props => props.theme.colors.tangerine};
    color: ${props => props.theme.colors.white};
  }
`;
