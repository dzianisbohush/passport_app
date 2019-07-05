import express from 'express';
import render from 'server/middlewares/renderer';
import getAllUsers from 'server/middlewares/dbQueries/getAllUsers';

const server = express();

server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', (req, res, next) => {
    if (!req.path.includes('/db/') && !req.path.includes('/api/')) {
      render(req, res);
      next();
    }
    next();
  })
  .get('/db/users', getAllUsers);

export default server;
