import express from 'express';
import passport from 'passport';
import {
  GOOGLE_API_USER_INFO_EMAIL,
  GOOGLE_API_USER_INFO_PROFILE,
} from 'server/constants';

const router = express.Router();

// auth logout
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

// auth with google+
router.get(
  '/google',
  passport.authenticate('google', {
    scope: [GOOGLE_API_USER_INFO_PROFILE, GOOGLE_API_USER_INFO_EMAIL],
  }),
);

// callback route for google to redirect to
// hand control to passport to use code to grab profile info
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  const { user } = req;

  let msg = 'your are not autinficated';
  if (user) {
    // eslint-disable-next-line max-len
    msg = `= взято из req.user после отработки кукей == username - ${user.name}||img-- ${user.img} || email- ${user.email}||googleId - ${user.googleId}`;
  }
  // res.redirect('/profile');
  res.send(msg);
});

export default router;
