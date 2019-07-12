import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import ReactRouterPropTypes from 'react-router-prop-types';
import queryString from 'query-string';
import PropTypes from 'prop-types';
import { Header, Img, Span, Ul } from './styles';

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
        <Ul>
          <li>
            <Link to="/profile">Home</Link>
          </li>
          <li>
            <Link to="/profile/status">Password Status Control</Link>
          </li>
          <li>
            <Link to="/profile/import-export">Import/export csv</Link>
          </li>
        </Ul>
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
