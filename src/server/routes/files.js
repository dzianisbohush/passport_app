const express = require('express');
const multer = require('multer');

const upload = multer({ dest: 'uploads/' });
const controller = require('../controllers/files');

const router = express.Router();

router.post('/upload', upload.single('file'), controller.uploadFile);

export default router;
