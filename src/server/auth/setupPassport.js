import passport from 'passport';
import User from '../models/user';
import { getStrategy as getGoogleStrategy } from './strategies/google';

function setupUserSerialization() {
  passport.serializeUser((user, done) => {
    console.log(999, done);
    done(null, user.email);
  });
}

function setupUserDeserealization() {
  passport.deserializeUser((email, done) => {
    User.getUserByUserEmail(email).then(user => {
      console.log(2323322, done);
      done(null, user);
    });
  });
}

// It`s possible to add more strategies if it is necessary
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
  setupUserDeserealization();
  setupAuthStrategy(strategyName);
}
