/* eslint-disable  no-console */
import express from 'express';
import Sequelize from 'sequelize';

import * as routes from 'constants/server/routes';
import postgresConnection from '../config/dbConfig';
import passwords from './server/routes/passwords';
import users from './server/routes/users';
import ext from './server/routes/extension';

const bodyParser = require('body-parser');

let app = require('server').default;

if (module.hot) {
  module.hot.accept('./server', () => {
    console.log('🔁  HMR Reloading `./server`...');
    try {
      app = require('server').default;
    } catch (error) {
      console.error(error);
    }
  });
  console.info('✅  Server-side HMR Enabled!');
}

const port = process.env.PORT || 3000;

export default express()
  .use(bodyParser.json())
  .use(routes.API_USERS, users)
  .use(routes.API_PASSWORDS, passwords)
  .use(routes.API_EXT, ext)
  .use((req, res) => app.handle(req, res))
  .listen(port, err => {
    if (err) {
      console.error(err);
      return;
    }

    const {
      development: { username, password, database, host, dialect },
    } = postgresConnection;
    const sequelize = new Sequelize(database, username, password, {
      host,
      dialect,
    });
    sequelize
      .authenticate()
      .then(() => {
        console.log(
          'Connection to database has been established successfully!',
        );
      })
      .catch(sequelizeError => {
        console.error('Unable to connect to the database:', sequelizeError);
      });
    console.log(`> Started on port ${port}`);
  });
