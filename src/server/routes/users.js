const express = require('express');
const controller = require('../controllers/users');

const router = express.Router();

router.get('/', controller.getAllUsers);
router.post('/', controller.createUser);
router.delete('/:email', controller.deleteUserByEmail);

export default router;
