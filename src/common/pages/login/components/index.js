import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import firebaseApp from 'common/firebaseApp';
import { Button } from 'antd';
import ReactRouterPropTypes from 'react-router-prop-types';
import 'firebase/auth';

class Login extends Component {
  handleSignInWithGoogle = async () => {
    const { signInWithGoogle, history, loginStart, loginFailure } = this.props;
    try {
      loginStart();
      await signInWithGoogle();

      history.push('/');
    } catch (error) {
      loginFailure(error);

      throw Error(error);
    }
  };

  render() {
    const { user, signOut, loading } = this.props;

    return (
      <div>
        {user ? (
          <div>
            <p>Hello, {user.displayName}</p>
            <Button onClick={signOut}>Sign out</Button>
          </div>
        ) : (
          <div>
            <p>Please sign in.</p>
            <Button
              type="primary"
              loading={loading}
              onClick={this.handleSignInWithGoogle}
            >
              Sign in with Google
            </Button>
          </div>
        )}
      </div>
    );
  }
}

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

Login.defaultProps = {
  user: null,
};

Login.propTypes = {
  loginStart: PropTypes.func.isRequired,
  loginFailure: PropTypes.func.isRequired,
  signInWithGoogle: PropTypes.func.isRequired,
  signOut: PropTypes.func.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
  user: PropTypes.shape({
    displayName: PropTypes.string,
    photoURL: PropTypes.string,
    email: PropTypes.string,
  }),
  loading: PropTypes.bool.isRequired,
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(Login);
