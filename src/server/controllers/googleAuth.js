import { openAuthWindow } from '../auth/strategies/google';

export async function logout(req, res) {
  // TODO: move /logout into common auth route
  await req.logout();
  res.redirect('/');
}

export async function authenticate(req, res, next) {
  await openAuthWindow(req, res, next);
}

export async function handleAuthRedirect(req, res) {
  if (req.user) {
    res.cookie('token', req.query.code, { maxAge: 3600, httpOnly: false });
    res.redirect('/profile');
  } else {
    res.redirect('/');
    res.send('You are not authorized');
  }
}
