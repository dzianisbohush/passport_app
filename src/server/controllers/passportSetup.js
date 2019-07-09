import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth20';
import {
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  GOOGLE_CALLBACK_URL,
} from 'server/constants';
import DB from '../models';

const { User } = DB;

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
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: GOOGLE_CALLBACK_URL,
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
