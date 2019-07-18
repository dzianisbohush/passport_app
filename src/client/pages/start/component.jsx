import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlus } from '@fortawesome/free-brands-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { ThemeProvider } from 'styled-components';

import { startPageTheme } from 'constants/client/themes';
import {
  StyledMainWrapper,
  StyledButtonsWrapper,
  StyledLoginLink,
  StyledLogoutLink,
} from './styles';

const Start = () => (
  <ThemeProvider theme={startPageTheme}>
    <StyledMainWrapper>
      <StyledButtonsWrapper>
        <StyledLoginLink href="auth/google">
          <FontAwesomeIcon icon={faGooglePlus} />
          <span>Authorize with Gooogle +</span>
        </StyledLoginLink>
        <StyledLogoutLink
          href="auth/logout"
          onClick={() => localStorage.removeItem('email')}
        >
          <FontAwesomeIcon icon={faSignOutAlt} />
          <span>Logout</span>
        </StyledLogoutLink>
      </StyledButtonsWrapper>
    </StyledMainWrapper>
  </ThemeProvider>
);

export default Start;
