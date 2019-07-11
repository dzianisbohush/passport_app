import express from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import passport from 'passport';
import render from 'server/middlewares/renderer';
import googleAuth from './routes/googleAuth';
import setupPassport from './auth/setupPassport';
import { COOKIES_SECRET_KEY, COOKIES_MAX_AGE } from './config';

const server = express();
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.use(
  cookieSession({
    maxAge: COOKIES_MAX_AGE,
    keys: COOKIES_SECRET_KEY,
  }),
);

server.use(passport.initialize());
server.use(passport.session());
server.use('/auth', googleAuth);

setupPassport('google');

server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', (req, res, next) => {
    if (!req.path.includes('/api/')) {
      render(req, res);
      next();
    }
    next();
  });
export default server;
