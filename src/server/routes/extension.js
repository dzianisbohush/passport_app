import express from 'express';
import extentionalController from '../controllers/extension';

const router = express.Router();

router.post('/getdata', extentionalController.getPassportData);

export default router;
