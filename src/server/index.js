import express from 'express';
import render from 'server/middlewares/renderer';

const server = express();

server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', render);

export default server;
