import styled, { keyframes } from 'styled-components';

const New = keyframes`
  from {color: red;}
  to {color: orange;}
`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px 10px;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    margin: 0px;
    font-size: 0.8em;

    & > div {
      display: flex;
      flex-direction: column;
    }
  }

  background-color: #f5f5f5;
`;

export const Img = styled.img.attrs(() => ({
  alt: 'User pic',
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

export const NavigationBar = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px;
  text-align: center;
  & > span {
    padding: 0px 10px;
    height: 20px;
  }
  & > :first-child {
    border-right: 1px solid black;
  }
  & > :nth-child(2)::after {
    content: "New!";
    margin-bottom: 40px;
    height: 20px;
    display: ${props => (props.notification ? 'inline' : 'none')}
    animation: ${New} 5s alternate infinite;
    position: absolute;

    font-size: 0.7em;
  }
  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-self: center;
    margin: 5px;
    & > span {
      padding: 2px 0px;
      margin: 0px;
      border: 0px;
    }
    & > :first-child {
      border-right: none;
    }
  }
`;
