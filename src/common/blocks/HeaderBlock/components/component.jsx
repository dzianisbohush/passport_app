import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import ReactRouterPropTypes from 'react-router-prop-types';
import queryString from 'query-string';
import PropTypes from 'prop-types';
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
    const { userName, userPhotoURL } = this.props;

    return (
      <Header>
        <div>
          <Img src={userPhotoURL} />
          <Span>{userName}</Span>
        </div>
        <NavigationBar>
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
};

export default withRouter(HeaderBlock);
