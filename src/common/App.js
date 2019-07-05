import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from 'common/pages/home/containers';
import Login from 'common/pages/login/containers';
import firebaseApp from 'common/firebaseApp';
import Edit from 'common/pages/edit/containers';
import PrivateRoute from 'common/PrivateRoute';

import 'antd/dist/antd.css';

class App extends Component {
  state = {
    authenticated: true,
    userInfo: null,
  };

  componentDidMount() {
    firebaseApp.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authenticated: true,
          userInfo: user,
        });
      } else {
        this.setState({
          authenticated: false,
          userInfo: null,
        });
      }
    });
  }

  render() {
    const { authenticated, userInfo } = this.state;

    return (
      <Switch>
        <PrivateRoute
          exact
          path="/"
          component={Home}
          userInfo={userInfo}
          authenticated={authenticated}
        />
        <PrivateRoute
          exact
          path="/edit"
          component={Edit}
          userInfo={userInfo}
          authenticated={authenticated}
        />
        <Route exact path="/login" component={Login} />
      </Switch>
    );
  }
}

export default App;
