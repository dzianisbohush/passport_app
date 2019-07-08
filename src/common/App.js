import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from 'common/pages/home/containers';
import Edit from 'common/pages/edit/containers';
import Start from './pages/start/start';
import TestRedirect from './pages/TestRedir/TestRedir';
import 'antd/dist/antd.css';

const App = () => (
  <Switch>
    <Route exact path="/profile" component={Home} />
    <Route exact path="/profile/edit/:id?" component={Edit} />
    <Route exact path="/auth/google/redirect" component={TestRedirect} />
    <Route exact path="/" component={Start} />
  </Switch>
);

export default App;
