import styled from 'styled-components';

export const StyledMainWrapper = styled.div`
  position: relative;
  height: 100vh;
  background: linear-gradient(
    135deg,
    #1e5799 0%,
    #207cca 32%,
    #207cca 32%,
    #2989d8 50%,
    #1e5799 97%,
    #7db9e8 100%
  );
`;

export const StyledButtonsWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
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
  background-color: #00d4ff;
  color: #ffffff;

  &:hover {
    background-color: #00c4eb;
    color: #ffffff;
  }
`;

export const StyledLogoutLink = styled(StyledLink)`
  background-color: #ffa500;
  color: #ffffff;
  margin-top: 10px;

  &:hover {
    background-color: #eb9800;
    color: #ffffff;
  }
`;
