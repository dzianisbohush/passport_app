import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from 'common/pages/home/containers';
import EditPage from 'common/pages/edit/containers';
import AddPage from 'common/pages/add/containers';
import StartPage from 'common/pages/start';
import sharingPasswordPage from 'common/pages/sharingPasswords';

import 'antd/dist/antd.css';

const App = () => (
  <Switch>
    <Route exact path="/" component={StartPage} />
    <Route exact path="/profile" component={Home} />
    <Route exact path="/profile/edit/:id?" component={EditPage} />
    <Route exact path="/profile/add" component={AddPage} />
    <Route
      exact
      path="/profile/share_passwords"
      component={sharingPasswordPage}
    />
  </Switch>
);

export default App;
