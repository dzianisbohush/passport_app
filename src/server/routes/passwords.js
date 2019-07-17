import { SHARE, SHARE_ACCEPT } from 'constants/server/routes';

const express = require('express');
const controller = require('../controllers/passwords');

const router = express.Router();

router.post('/', controller.createPassword);
router.put('/:id', controller.updatePasswordById);
router.get('/:userEmail', controller.getPasswordsByUserId);
router.delete('/:id', controller.deletePasswordById);
router.post(SHARE, controller.sharePasswords);
router.patch(`${SHARE_ACCEPT}/:userEmail`, controller.acceptSharingPasswords);
router.delete(`${SHARE_ACCEPT}/:userEmail`, controller.rejectSharingPasswords);

export default router;
