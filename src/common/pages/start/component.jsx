import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlus } from '@fortawesome/free-brands-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import {
  StyledMainWrapper,
  StyledButtonsWrapper,
  StyledLoginLink,
  StyledLogoutLink,
} from './styles';

const Start = () => (
  <StyledMainWrapper>
    <StyledButtonsWrapper>
      <StyledLoginLink href="auth/google">
        <FontAwesomeIcon icon={faGooglePlus} />
        <span>Authorize with Gooogle +</span>
      </StyledLoginLink>
      <StyledLogoutLink href="auth/logout">
        <FontAwesomeIcon icon={faSignOutAlt} />
        <span>Logout</span>
      </StyledLogoutLink>
    </StyledButtonsWrapper>
  </StyledMainWrapper>
);

export default Start;
