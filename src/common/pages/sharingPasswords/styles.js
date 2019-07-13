import styled from 'styled-components';

export const SharePassword = styled.div`
  margin: 50px 30%;
  width: 30%;
  border: 1.5px solid black;
  background-color: lightgrey;
  padding: 0px 5%;

  & > h3 {
    margin: 20px auto;
  }

  @media only screen and (max-width: 600px) {
    margin: 0px;
    padding: 0px 10%;
    width: 100%;
  }
`;

export const ButtonsWrapper = styled.div`
  & > button {
    margin: 10px 40px;
  }
`;

export const TablesWrapper = styled.div`
  margin: 50px;
  & > h2 {
    text-align: center;
    margin: 50px;
  }
  & > div {
    margin: 50px auto;
    width: 50%;
  }
  @media only screen and (max-width: 600px) {
    & > h2 {
      margin: 50px 0px;
    }
    margin: 0px;
    & > div {
      margin: 50px 0px;
      width: 100%;
    }
  }
`;
