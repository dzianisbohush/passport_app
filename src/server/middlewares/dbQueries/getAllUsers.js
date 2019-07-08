/* eslint-disable consistent-return */
const { Pool } = require('pg');

const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'api',
  password: 'password',
  port: 5432,
});

const getUsers = (request, response) => {
  pool.connect((err, client, release) => {
    // console.log('client connected?', client['_connected']);
    if (err) {
      return console.error('Error acquiring client', err.stack);
    }
    client.query('SELECT * FROM users ORDER BY id ASC', (error, result) => {
      release();
      if (error) {
        return console.error('Error executing query', error.stack);
      }
      response.status(200).json(result.rows);
    });
  });
};

export default getUsers;
