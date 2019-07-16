import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AcceptBlock from './Accept';

class passwordsStatusControlPage extends Component {
  state = {
    isAccepting: false,
    passwordsForAccepting: [],
  };

  componentDidMount() {
    const { passwordsItems } = this.props;

    if (passwordsItems.length) {
      this.getPasswordsForAccepting(passwordsItems);
    }
  }

  componentDidUpdate(prevProps) {
    const { passwordsItems, userEmail, getPasswordsItems } = this.props;

    if (prevProps.userEmail !== userEmail && !passwordsItems.length) {
      getPasswordsItems(userEmail);
    }

    if (
      prevProps.passwordsItems.length !== passwordsItems.length &&
      passwordsItems.length
    ) {
      this.getPasswordsForAccepting(passwordsItems);
    }
  }

  getPasswordsForAccepting = passwordsItems => {
    const passwordsForAccepting = passwordsItems.filter(
      item => !item.isAccepted,
    );

    if (passwordsForAccepting.length) {
      this.setState({
        isAccepting: true,
        passwordsForAccepting,
      });
    }
  };

  handleAcceptPassword = () => {
    const { userEmail, acceptPasswords } = this.props;

    acceptPasswords(userEmail);
  };

  handleDeclinePassword = () => {
    const { userEmail, declinePasswords } = this.props;

    declinePasswords(userEmail);
  };

  render() {
    const { isAccepting, passwordsForAccepting } = this.state;

    return (
      <React.Fragment>
        {isAccepting ? (
          <AcceptBlock
            declinePassword={this.handleDeclinePassword}
            acceptPassword={this.handleAcceptPassword}
            passwordsForAccepting={passwordsForAccepting}
          />
        ) : (
          <h1>You don`t have passwords for accepting</h1>
        )}
      </React.Fragment>
    );
  }
}

passwordsStatusControlPage.propTypes = {
  userEmail: PropTypes.string.isRequired,
  getPasswordsItems: PropTypes.func.isRequired,
  declinePasswords: PropTypes.func.isRequired,
  acceptPasswords: PropTypes.func.isRequired,
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
};

export default passwordsStatusControlPage;
