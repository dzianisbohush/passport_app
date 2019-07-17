import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from 'client/pages/home/containers';
import EditPage from 'client/pages/edit/containers';
import AddPage from 'client/pages/add/containers';
import Header from 'client/blocks/HeaderBlock/containers';
import PasswordsStatusControlPage from 'client/pages/status/containers';
import * as routes from 'constants/client/routes';

import 'antd/dist/antd.css';

const App = () => (
  <React.Fragment>
    <Header />
    <Switch>
      <Route exact path={routes.PROFILE} component={Home} />
      <Route exact path={`${routes.PROFILE_EDIT}/:id?`} component={EditPage} />
      <Route exact path={routes.PROFILE_ADD} component={AddPage} />
      <Route
        exact
        path={routes.PROFILE_STATUS}
        component={PasswordsStatusControlPage}
      />
    </Switch>
  </React.Fragment>
);

export default App;
