import express from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import passport from 'passport';
import Cron from 'cron';

import * as routes from 'constants/server/routes';
import render from 'server/routes/renderer';
import googleAuth from './routes/googleAuth';
import setupPassport from './auth/setupPassport';
import files from './routes/files';
import { COOKIE, CRON } from './constants';

import EmailController from './controllers/EmailController';

const { CronJob } = Cron;

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
server.use(routes.AUTH, googleAuth);
server.use(routes.API_FILES, files);

setupPassport('google');

server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', (req, res, next) => {
    const { user } = req;

    if (
      (user &&
        !req.path.includes(`${routes.API}/`) &&
        !req.path.includes(`${routes.AUTH}/`)) ||
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
  () => {
    EmailController();
  },
  null,
  true,
  CRON.TIME_SETTINGS,
);

export default server;
