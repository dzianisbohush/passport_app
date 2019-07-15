import React, { Component } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import ReactRouterPropTypes from 'react-router-prop-types';
import TableBlock from './TableBlock';

class Home extends Component {
  componentDidMount() {
    const {
      getPasswordsItems,
      getUsersForSharing,
      location: { search },
    } = this.props;
    const { email: userEmail } = queryString.parse(search);

    if (userEmail) {
      getPasswordsItems(userEmail);
      localStorage.setItem('email', userEmail);
    } else {
      const userEmailFromLS = localStorage.getItem('email');
      getPasswordsItems(userEmailFromLS);
    }

    getUsersForSharing();
  }

  goToEditPage = id => {
    const { history } = this.props;

    history.push(`profile/edit/${id}`);
  };

  goToAddPage = () => {
    const { history } = this.props;

    history.push('profile/add');
  };

  render() {
    const {
      loading,
      passwordsItems,
      deletePasswordItem,
      userEmail,
      usersForSharing,
      sharePasswords,
    } = this.props;

    return (
      <TableBlock
        loading={loading}
        userEmail={userEmail}
        items={passwordsItems}
        usersForSharing={usersForSharing}
        goToEditPage={this.goToEditPage}
        goToAddPage={this.goToAddPage}
        sharePasswords={sharePasswords}
        deletePasswordItem={deletePasswordItem}
      />
    );
  }
}

Home.defaultProps = {
  userEmail: '',
  usersForSharing: [],
};

Home.propTypes = {
  getPasswordsItems: PropTypes.func.isRequired,
  deletePasswordItem: PropTypes.func.isRequired,
  getUsersForSharing: PropTypes.func.isRequired,
  sharePasswords: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  passwordsItems: PropTypes.arrayOf(
    PropTypes.shape({
      createdAt: PropTypes.string,
      id: PropTypes.number,
      login: PropTypes.string,
      name: PropTypes.string,
      password: PropTypes.string,
      resourceAddress: PropTypes.string,
      sendNotificationAt: PropTypes.string,
      updatedAt: PropTypes.string,
      userId: PropTypes.number,
    }),
  ).isRequired,
  history: ReactRouterPropTypes.history.isRequired,
  location: ReactRouterPropTypes.location.isRequired,
  userEmail: PropTypes.string,
  usersForSharing: PropTypes.arrayOf(
    PropTypes.shape({
      email: PropTypes.string,
    }),
  ),
};

export default Home;
