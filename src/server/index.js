import express from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import passport from 'passport';
import render from 'server/routes/renderer';
import Cron from 'cron';
import googleAuth from './routes/googleAuth';
import setupPassport from './auth/setupPassport';
import files from './routes/files';
import { COOKIE, CRON } from './constants';

import EmailController from './controllers/EmailController';

// eslint-disable-next-line prefer-destructuring
const CronJob = Cron.CronJob;

const server = express();
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.use(
  cookieSession({
    maxAge: COOKIE.COOKIES_MAX_AGE,
    keys: [COOKIE.COOKIES_SECRET_KEY],
  }),
);

server.use(passport.initialize());
server.use(passport.session());
server.use('/auth', googleAuth);
server.use('/api/files', files);

setupPassport('google');

server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', (req, res, next) => {
    const { user } = req;

    if (
      (user && !req.path.includes('/api/') && !req.path.includes('/auth/')) ||
      req.path === '/'
    ) {
      render(req, res);
      next();
    } else {
      res.redirect('/');
    }
    next();
  })
  .get('/api/get-users', (req, res) => res.json({ user1: 'vasa' }));

// eslint-disable-next-line no-new
new CronJob(
  CRON.RUN_SETTUNGS,
  function() {
    EmailController();
  },
  null,
  true,
  CRON.TIME_SETTINGS,
);

export default server;
