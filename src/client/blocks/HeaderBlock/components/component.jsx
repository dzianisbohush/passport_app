import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import ReactRouterPropTypes from 'react-router-prop-types';
import queryString from 'query-string';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import { headerTheme } from 'constants/client/themes';
import { PROFILE, PROFILE_STATUS } from 'constants/client/routes';
import { Header, Img, Span, NavigationBar } from './styles';

class HeaderBlock extends PureComponent {
  componentDidMount() {
    const {
      location: { search },
      getUserInfo,
    } = this.props;
    const { email: userEmail } = queryString.parse(search);

    if (userEmail) {
      getUserInfo(userEmail);
    } else {
      const userEmailFromLS = localStorage.getItem('email');
      getUserInfo(userEmailFromLS);
    }
  }

  render() {
    const { userName, userPhotoURL, hasPasswordsForAccepting } = this.props;

    return (
      <ThemeProvider theme={headerTheme}>
        <Header>
          <div>
            <Img src={userPhotoURL} />
            <Span>{userName}</Span>
          </div>
          <NavigationBar notification={hasPasswordsForAccepting}>
            <span>
              <Link to={PROFILE}>Home</Link>
            </span>
            <span>
              <Link to={PROFILE_STATUS}>Password Status Control</Link>
            </span>
          </NavigationBar>
        </Header>
      </ThemeProvider>
    );
  }
}

HeaderBlock.propTypes = {
  userName: PropTypes.string.isRequired,
  userPhotoURL: PropTypes.string.isRequired,
  location: ReactRouterPropTypes.location.isRequired,
  getUserInfo: PropTypes.func.isRequired,
  hasPasswordsForAccepting: PropTypes.bool.isRequired,
};

export default withRouter(HeaderBlock);
