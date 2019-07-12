import express from 'express';
import render from 'server/middlewares/renderer';

// eslint-disable-next-line import/no-unresolved
import Cron from 'cron';

import EmailController from './controllers/EmailController';

// eslint-disable-next-line prefer-destructuring
const CronJob = Cron.CronJob;

const server = express();
server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', (req, res, next) => {
    if (!req.path.includes('/api/')) {
      render(req, res);
      next();
    }
    next();
  })
  .get('/api/get-users', (req, res) => res.json({ user1: 'vasa' }));

// eslint-disable-next-line no-new
new CronJob(
  '0 3 * * *',
  function() {
    EmailController();
  },
  null,
  true,
  'America/Los_Angeles',
);

export default server;
