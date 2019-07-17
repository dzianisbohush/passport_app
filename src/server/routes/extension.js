import express from 'express';

import { GETDATA } from 'constants/server/routes';
import extentionalController from '../controllers/extension';

const router = express.Router();

router.post(GETDATA, extentionalController.getPassportData);

export default router;
