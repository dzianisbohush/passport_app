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
  console.log('req', req.query.code); // TODO: remove it after implementing setting cookies
  if (req.user) {
    res.cookie('token', req.query.code, { maxAge: 3600, httpOnly: false });
    res.redirect('/profile');
  } else {
    // TODO: warn user, that he didn't log in
    res.redirect('/');
  }
}
