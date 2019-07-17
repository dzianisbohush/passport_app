import express from 'express';

import * as routes from 'constants/server/routes';
import {
  logout,
  authenticate,
  handleAuthRedirect,
} from '../controllers/googleAuth';

const router = express.Router();
// TODO: move /logout into client auth route
router.get(routes.LOGOUT, logout);
router.get(routes.GOOGLE, authenticate);
router.get(routes.GOOGLE_REDIRECT, authenticate, handleAuthRedirect);

export default router;
