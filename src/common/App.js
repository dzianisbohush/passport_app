import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from 'common/pages/home/containers';
import Edit from 'common/pages/edit/containers';
import Start from './pages/Start/Start';
import TestRedirect from './pages/TestRedir/TestRedir';
import 'antd/dist/antd.css';
// import './styles/main.less';

const App = () => (
  <Switch>
    <Route exact path="/profile" component={Home} />
    <Route exact path="/profile/edit" component={Edit} />
    <Route exact path="/auth/google/redirect" component={TestRedirect} />

    <Route exact path="/" component={Start} />
  </Switch>
);

export default App;
