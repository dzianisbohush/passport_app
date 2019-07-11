import passport from 'passport';
import User from '../models/user';
import { getStrategy as getGoogleStrategy } from './strategies/google';

function setupUserSerialization() {
  passport.serializeUser((user, done) => {
    done(null, user.email);
  });
}

function setupUserDeserialization() {
  passport.deserializeUser((email, done) => {
    User.getUserByUserEmail(email).then(user => {
      done(null, user);
    });
  });
}

function setupAuthStrategy(strategyName) {
  switch (strategyName) {
    case 'google':
      passport.use(getGoogleStrategy());
      break;
    default:
      break;
  }
}

export default function setupPassport(strategyName) {
  setupUserSerialization();
  setupUserDeserialization();
  setupAuthStrategy(strategyName);
}
