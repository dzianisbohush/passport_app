const express = require('express');
const controller = require('../controllers/users');

const router = express.Router();

router.post('/', controller.createUser);

export default router;
