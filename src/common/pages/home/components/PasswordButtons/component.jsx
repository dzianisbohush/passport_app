import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

import StyledButtons from './styles';

const PasswordButtons = props => {
  const { isChecked } = props;
  return (
    <StyledButtons>
      <Button size="large">Add+</Button>
      <Button disabled={!isChecked} size="large">
        &lt;
      </Button>
    </StyledButtons>
  );
};

PasswordButtons.propTypes = {
  isChecked: PropTypes.bool.isRequired,
};

export default PasswordButtons;
