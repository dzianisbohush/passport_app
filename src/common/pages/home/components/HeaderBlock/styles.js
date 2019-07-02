import styled from 'styled-components';

export const Header = styled.header`
  margin: 20px;
  display: flex;
  flex-direction: row;
  border: 2px solid black;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Span = styled.span`
  margin: 0px 20px;
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  & > li {
    & :: after {
      content: '|';
      margin: 0px 10px;
    }
  }
  list-style-type: none;

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    & > li {
      margin: 10px -20px;
      & :: after {
        content: none;
      }
    }
  }
`;
