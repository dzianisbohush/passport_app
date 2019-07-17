import React, { PureComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlus } from '@fortawesome/free-brands-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import {
  StyledMainWrapper,
  StyledButtonsWrapper,
  StyledLoginLink,
  StyledLogoutLink,
} from './styles';

class StartPage extends PureComponent {
  handleLogoutClick = () => {
    localStorage.removeItem('email');
  };

  render() {
    return (
      <StyledMainWrapper>
        <StyledButtonsWrapper>
          <StyledLoginLink href="auth/google">
            <FontAwesomeIcon icon={faGooglePlus} />
            <span>Authorize with Gooogle +</span>
          </StyledLoginLink>
          <StyledLogoutLink href="auth/logout" onClick={this.handleLogoutClick}>
            <FontAwesomeIcon icon={faSignOutAlt} />
            <span>Logout</span>
          </StyledLogoutLink>
        </StyledButtonsWrapper>
      </StyledMainWrapper>
    );
  }
}

export default StartPage;
