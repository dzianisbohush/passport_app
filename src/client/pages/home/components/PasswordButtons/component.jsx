import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'antd';

import { StyledButtons, StyledIcon } from './styles';

class PasswordButtons extends PureComponent {
  handleAddBtnClick = () => {
    const { goToAddPage } = this.props;

    goToAddPage();
  };

  render() {
    const { isActiveShareBtn, handleShareButtonClick } = this.props;
    return (
      <StyledButtons>
        <Button size="large" type="primary" onClick={this.handleAddBtnClick}>
          Add
          <StyledIcon>
            <FontAwesomeIcon icon={faPlus} />
          </StyledIcon>
        </Button>
        <Button
          disabled={!isActiveShareBtn}
          size="large"
          type="primary"
          onClick={handleShareButtonClick}
        >
          Share
          <StyledIcon>
            <FontAwesomeIcon icon={faShareAlt} />
          </StyledIcon>
        </Button>
      </StyledButtons>
    );
  }
}

PasswordButtons.propTypes = {
  isActiveShareBtn: PropTypes.bool.isRequired,
  goToAddPage: PropTypes.func.isRequired,
  handleShareButtonClick: PropTypes.func.isRequired,
};

export default PasswordButtons;
