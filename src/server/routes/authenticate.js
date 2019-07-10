import express from 'express';

const controller = require('../controllers/authenticate');

const router = express.Router();

router.get('/google', controller.authenticate);
router.get('/google/redirect', controller.authenticate);

export default router;
