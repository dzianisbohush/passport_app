import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from 'common/pages/home/containers';
import EditPage from 'common/pages/edit/containers';
import AddPage from 'common/pages/add/containers';
import Start from './pages/Start/Start';

import 'antd/dist/antd.css';
// import './styles/main.less';

const App = () => (
  <Switch>
    <Route exact path="/profile" component={Home} />
    <Route exact path="/profile/edit/:id?" component={EditPage} />
    <Route exact path="/profile/add" component={AddPage} />
    <Route exact path="/" component={Start} />
  </Switch>
);

export default App;
