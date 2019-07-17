import React from 'react';
import { Route, Switch } from 'react-router-dom';
import StartPage from 'client/pages/start';
import PrivateRoutes from './PrivateRoutes';

import 'antd/dist/antd.css';

const App = () => (
  <Switch>
    <Route exact path="/" component={StartPage} />
    <PrivateRoutes />
  </Switch>
);

export default App;
