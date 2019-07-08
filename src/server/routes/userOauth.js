import express from 'express';
import passport from 'passport';

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
    scope: [
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email',
    ],
  }),
);

// callback route for google to redirect to
// hand control to passport to use code to grab profile info
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  // res.send(req.user);
  // res.redirect('/profile');

  // eslint-disable-next-line prefer-destructuring
  const user = req.user;
  // res.redirect('/profile');
  let msg = 'your are not autinficated';
  if (user) {
    // eslint-disable-next-line max-len
    msg = `= взято из req.user после отработки кукей == username - ${user.name}||img-- ${user.img} || email- ${user.email}||googleId - ${user.googleId}`;
  }
  res.send(msg);
  // res.redirect('/profile');
});
// test rout for chekin if logout work
router.get('/test', (req, res) => {
  // eslint-disable-next-line prefer-destructuring
  const user = req.user;
  let msg = 'your are not autinficated';
  if (user) {
    // eslint-disable-next-line max-len
    msg = `= взято из req.user после отработки кукей == username - ${user.name}||img-- ${user.img} || email- ${user.email}||googleId - ${user.googleId}`;
  }
  res.send(msg);
});
export default router;
