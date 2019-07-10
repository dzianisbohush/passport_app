import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from 'common/pages/home/containers';
import EditPage from 'common/pages/edit/containers';
import AddPage from 'common/pages/add/containers';

import 'antd/dist/antd.css';
// import './styles/main.less';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/edit/:id?" component={EditPage} />
    <Route exact path="/add" component={AddPage} />
  </Switch>
);

export default App;
