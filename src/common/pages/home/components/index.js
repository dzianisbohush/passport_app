import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from 'antd';

const ButtonSC = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

const Home = ({ increment, decrement, counter }) => (
  <p>
    <ButtonSC>button with styled components</ButtonSC>
    <Button type="primary">dd</Button>
    <Button>Button</Button>
    <Button type="danger">Button</Button>
    Clicked: {counter} times{' '}
    <button onClick={increment} type="button">
      +
    </button>{' '}
    <button onClick={decrement} type="button">
      -
    </button>
  </p>
);

Home.propTypes = {
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired,
};

export default Home;
