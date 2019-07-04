import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media only screen and (max-width: 600px) {
    flex-direction: column;

    font-size: 0.8em;

    & > div {
      display: flex;
      flex-direction: column;
    }
  }

  background-color: lightgrey;
`;

export const Img = styled.img.attrs(() => ({
  alt: 'User pic',
  srcSet:
    // eslint-disable-next-line max-len
    'http://komotoz.ru/kartinki/images/kartinki_pro_lubov/kartinki_pro_lubov_17.jpg',
}))`
  border-radius: 100%;
  width: 50px;
  height: 50px;
  margin: auto;
`;

export const Span = styled.span`
  margin: 0px 20px;
  align-self: center;
  @media only screen and (max-width: 600px) {
    margin: 5px 0px;
  }
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  margin: 10px;
  padding: 0px;
  text-align: center;
  list-style-type: none;

  & > span {
    margin: 0px 10px;
  }

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-self: center;
    margin: 5px 0px;
    & > li {
      padding: 2px 0px;
      margin: 0px;
    }
    & > span {
      display: none;
    }
  }
`;
