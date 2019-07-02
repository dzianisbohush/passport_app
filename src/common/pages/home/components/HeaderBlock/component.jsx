import React from 'react';
import { Link } from 'react-router-dom';

import { Header, Span, Ul } from './styles';

const HeaderBlock = () => {
  return (
    <Header>
      <img alt="User pic" />
      <Span />
      <Ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/status">Password Status Control</Link>
        </li>
        <li>
          <Link to="/import_export">Import/export csv</Link>
        </li>
      </Ul>
    </Header>
  );
};

export default HeaderBlock;
