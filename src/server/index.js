import express from 'express';
import render from 'server/middlewares/renderer';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import passport from 'passport';
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

server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .use('/auth', userOauthRouth)
  .get('/*', (req, res, next) => {
    if (!req.path.includes('/api/')) {
      render(req, res);
      next();
    }
    next();
  });
export default server;
