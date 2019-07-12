import React, { Component } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import ReactRouterPropTypes from 'react-router-prop-types';
import TableBlock from './TableBlock';

class Home extends Component {
  componentDidMount() {
    const {
      getPasswordsItems,
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
    const { loading, passwordsItems, deletePasswordItem } = this.props;

    return (
      <TableBlock
        loading={loading}
        items={passwordsItems}
        goToEditPage={this.goToEditPage}
        goToAddPage={this.goToAddPage}
        deletePasswordItem={deletePasswordItem}
      />
    );
  }
}

Home.propTypes = {
  getPasswordsItems: PropTypes.func.isRequired,
  deletePasswordItem: PropTypes.func.isRequired,
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
};

export default Home;
