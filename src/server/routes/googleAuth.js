import express from 'express';
import {
  logout,
  authenticate,
  handleAuthRedirect,
} from '../controllers/googleAuth';

const router = express.Router();
// TODO: move /logout into client auth route
router.get('/logout', logout);
router.get('/google', authenticate);
router.get('/google/redirect', authenticate, handleAuthRedirect);

export default router;
