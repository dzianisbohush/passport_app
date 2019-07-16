import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import ReactRouterPropTypes from 'react-router-prop-types';
import queryString from 'query-string';
import PropTypes from 'prop-types';
import { Header, Img, Span, NavigationBar } from './styles';
import defaultUserPhoto from '../assets/img/defaultUserPhoto.png';

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
    const userPhoto = userPhotoURL.length ? userPhotoURL : defaultUserPhoto;

    return (
      <Header>
        <div>
          <Img src={userPhoto} />
          <Span>{userName}</Span>
        </div>
        <NavigationBar notification={hasPasswordsForAccepting}>
          <span>
            <Link to="/profile">Home</Link>
          </span>
          <span>
            <Link to="/profile/status">Password Status Control</Link>
          </span>
        </NavigationBar>
      </Header>
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
