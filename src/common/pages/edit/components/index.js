import React from 'react';
import PropTypes from 'prop-types';

const Edit = ({
                   increment,
                   decrement,
                   counter,
                 }) => (
  <p>
    IT IS EDIT PAGE
    Clicked: {counter} times
    {' '}
    <button onClick={increment}>+</button>
    {' '}
    <button onClick={decrement}>-</button>
  </p>
);

Edit.propTypes = {
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired,
};

export default Edit;
