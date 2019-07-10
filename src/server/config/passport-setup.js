import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth20';
import keys from './keys';
import User from '../models/user';

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findByPk(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.google.clientID,
      clientSecret: keys.google.clientSecret,
      callbackURL: '/auth/google/redirect',
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ where: { googleId: profile.id } })
        .then(user => {
          if (user) {
            return user;
          }
          return User.create({
            googleId: profile.id,
            email: profile.emails[0].value,
            name: profile.displayName,
            img: profile.photos[0].value,
          });
        })
        .then(user => {
          done(null, user);
        });
    },
  ),
);
