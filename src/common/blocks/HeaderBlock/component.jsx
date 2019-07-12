import React from 'react';
import { Link } from 'react-router-dom';

import { Header, Img, Span, NavigationBar } from './styles';

const HeaderBlock = () => {
  return (
    <Header>
      <div>
        <Img />
        <Span>Andrei Yanushkevich</Span>
      </div>
      <NavigationBar>
        <span>
          <Link to="/">Home</Link>
        </span>
        <span>
          <Link to="/status">Password Status Control</Link>
        </span>
        <span>
          <Link to="/import_export">Import/export csv</Link>
        </span>
      </NavigationBar>
    </Header>
  );
};

export default HeaderBlock;
