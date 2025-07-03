const express = require("express");
const userRouter = require("./userRouter");
const causeRouter = require("./causeRouter");

const webRouter = express.Router();

webRouter.use("/user", userRouter);
webRouter.use("/cause", causeRouter);

module.exports = webRouter;