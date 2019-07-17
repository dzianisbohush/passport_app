import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from 'client/pages/home/containers';
import EditPage from 'client/pages/edit/containers';
import AddPage from 'client/pages/add/containers';
import Header from 'client/blocks/HeaderBlock/containers';
import PasswordsStatusControlPage from 'client/pages/status/containers';

import 'antd/dist/antd.css';

const App = () => (
  <React.Fragment>
    <Header />
    <Switch>
      <Route exact path="/profile" component={Home} />
      <Route exact path="/profile/edit/:id?" component={EditPage} />
      <Route exact path="/profile/add" component={AddPage} />
      <Route
        exact
        path="/profile/status"
        component={PasswordsStatusControlPage}
      />
    </Switch>
  </React.Fragment>
);

export default App;
