const multer = require('multer');
const upload = multer();
const express = require('express');
const causeRouter = express.Router();
const CauseController = require('../controller/CauseController.js');

const CauseControllerInstance = new CauseController();

causeRouter.post('/addCause', upload.none(), CauseControllerInstance.addCause);
causeRouter.get('/getCauses', CauseControllerInstance.getCauses);
causeRouter.get('/getCausesByUserId/:userId', CauseControllerInstance.getCausesByUserId);
causeRouter.put('/updateCauseById/:causeId', CauseControllerInstance.updateCauseById);
causeRouter.delete('/deleteCauseById/:causeId', CauseControllerInstance.deleteCauseById);

module.exports = causeRouter;