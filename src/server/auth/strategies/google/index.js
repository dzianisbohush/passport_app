import passport from 'passport/lib/index';
import GoogleStrategy from 'passport-google-oauth20/lib/index';
import {
  GOOGLE_USER_INFO_PROFILE,
  GOOGLE_USER_INFO_EMAIL,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
} from './constants';
import User from '../../../models/user';

// TODO: remove eslint disabling after adding more utils
// eslint-disable-next-line import/prefer-default-export
export const openAuthWindow = passport.authenticate('google', {
  scope: [GOOGLE_USER_INFO_PROFILE, GOOGLE_USER_INFO_EMAIL],
});

export function getStrategy() {
  return new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/redirect',
    },
    (accessToken, refreshToken, profile, done) => {
      const {
        _json: { sub: googleId, name, email, picture: img },
      } = profile;
      User.getUserByGoogleId(googleId)
        .then(user => {
          if (user) return user;
          return User.createUser({ googleId, email, name, img });
        })
        .then(user => {
          done(null, user, accessToken, refreshToken);
        });
    },
  );
}
