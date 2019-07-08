const express = require('express');
const controller = require('../controllers/passwords');

const router = express.Router();

router.post('/', controller.createPassword);
router.put('/:id', controller.updatePasswordById);
router.get('/:userId', controller.getPasswordsByUserId);
router.delete('/:id', controller.deletePasswordById);

export default router;
