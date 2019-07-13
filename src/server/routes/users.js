const express = require('express');
const controller = require('../controllers/users');

const router = express.Router();

router.get('/', controller.getAllUsers);
router.post('/', controller.createUser);
router.get('/:userEmail', controller.getUserByUserEmail);
router.delete('/:userEmail', controller.deleteUserByEmail);

export default router;
