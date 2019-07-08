import express from 'express';
import render from 'server/middlewares/renderer';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import passport from 'passport';
// eslint-disable-next-line no-unused-vars
import passportSetup from './config/passport-setup';
import userOauthRouth from './routes/userOauth';
import keys from './config/keys';

const server = express();
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey],
  }),
);

server.use(passport.initialize());
server.use(passport.session());

server.use('/auth', userOauthRouth);

server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', (req, res, next) => {
    if (!req.path.includes('/db/')) {
      render(req, res);
      next();
    }
    next();
  });
export default server;
