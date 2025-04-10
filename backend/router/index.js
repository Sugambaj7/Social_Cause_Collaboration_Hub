const express = require("express");
const userRouter = require("./userRouter");

const webRouter = express.Router();

webRouter.use("/user", userRouter);

module.exports = webRouter;