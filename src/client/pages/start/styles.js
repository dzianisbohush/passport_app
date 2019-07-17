import styled from 'styled-components';

// colors constants
const white = '#ffffff';
const cyan = '#00d4ff';
const robinsEggBlue = '#00c4eb';
const orange = '#ffa500';
const tangerine = '#eb9800';
const matisse = '#1e5799';
const mariner = '#207cca';
const curiousBlue = '#2989d8';
const seagull = '#7db9e8';

export const StyledMainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  background: linear-gradient(
    135deg,
    ${matisse} 0%,
    ${mariner} 32%,
    ${mariner} 32%,
    ${curiousBlue} 50%,
    ${matisse} 97%,
    ${seagull} 100%
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
  font-size: 1.5rem;
`;

export const StyledLoginLink = styled(StyledLink)`
  background-color: ${cyan};
  color: ${white};
  &:hover {
    background-color: ${robinsEggBlue};
    color: ${white};
  }
`;

export const StyledLogoutLink = styled(StyledLink)`
  background-color: ${orange};
  color: ${white};
  margin-top: 10px;
  &:hover {
    background-color: ${tangerine};
    color: ${white};
  }
`;
