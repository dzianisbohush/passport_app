const express = require('express');
const controller = require('../controllers/users');

const router = express.Router();

router.post('/', controller.createUser);
router.delete('/:email', controller.deleteUserByEmail);

export default router;
