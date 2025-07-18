const multer = require('multer');
const upload = multer();
const express = require('express');
const causeRouter = express.Router();
const CauseController = require('../controller/CauseController.js');

const CauseControllerInstance = new CauseController();

causeRouter.post('/addCause', upload.none(), CauseControllerInstance.addCause);
causeRouter.get('/getCausesByUserId/:userId', CauseControllerInstance.getCausesByUserId);

module.exports = causeRouter;