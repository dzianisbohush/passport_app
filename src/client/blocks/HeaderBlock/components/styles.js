import styled, { keyframes } from 'styled-components';

const New = keyframes`
  from {color: red;}
  to {color: orange;}
`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: ${props => props.theme.spacingUnit / 2}px
    ${props => props.theme.spacingUnit}px;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    margin: 0px;
    font-size: 0.8em;

    & > div {
      display: flex;
      flex-direction: column;
    }
  }

  background-color: ${props => props.theme.color};
`;

export const Img = styled.img.attrs(() => ({
  alt: 'User pic',
}))`
  border-radius: 100%;
  width: ${props => props.theme.size}px;
  height: ${props => props.theme.size}px;
  margin: auto;
`;

export const Span = styled.span`
  margin: 0px ${props => props.theme.spacingUnit}px;
  align-self: center;
  @media only screen and (max-width: 600px) {
    margin: ${props => props.theme.spacingUnit / 2}px 0px;
  }
`;

export const NavigationBar = styled.div`
  display: flex;
  flex-direction: row;
  margin: ${props => props.theme.spacingUnit}x;
  text-align: center;
  & > span {
    padding: 0px ${props => props.theme.spacingUnit}px;
    height: ${props => props.theme.spacingUnit * 2}px;
  }
  & > :first-child {
    border-right: 1px solid black;
  }
  & > :nth-child(2)::after {
    content: "New!";
    margin-bottom: ${props => props.theme.spacingUnit * 4}px;
    height: ${props => props.theme.size / 2.5}px;
    display: ${props => (props.notification ? 'inline' : 'none')}
    animation: ${New} 5s alternate infinite;
    position: absolute;

    font-size: 0.7em;
  }
  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-self: center;
    margin: ${props => props.theme.spacingUnit / 2}px;
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
