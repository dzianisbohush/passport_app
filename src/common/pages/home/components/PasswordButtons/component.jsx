import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'antd';

import { StyledButtons, StyledIcon } from './styles';

const PasswordButtons = props => {
  const { isActiveShareBtn, goToEditPage } = props;
  return (
    <StyledButtons>
      <Button size="large" type="primary" onClick={() => goToEditPage()}>
        Add
        <StyledIcon>
          <FontAwesomeIcon icon={faPlus} />
        </StyledIcon>
      </Button>
      <Button disabled={!isActiveShareBtn} size="large" type="primary">
        Share
        <StyledIcon>
          <FontAwesomeIcon icon={faShareAlt} />
        </StyledIcon>
      </Button>
    </StyledButtons>
  );
};

PasswordButtons.propTypes = {
  isActiveShareBtn: PropTypes.bool.isRequired,
  goToEditPage: PropTypes.func.isRequired,
};

export default PasswordButtons;
