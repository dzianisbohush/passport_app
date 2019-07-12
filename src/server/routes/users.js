const express = require('express');
const controller = require('../controllers/users');

const router = express.Router();

router.post('/', controller.createUser);
router.get('/:userEmail', controller.getUserByUserEmail);
router.delete('/:userEmail', controller.deleteUserByEmail);

export default router;
