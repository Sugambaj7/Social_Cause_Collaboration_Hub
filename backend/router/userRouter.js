const express = require("express");
const userRouter = express.Router();
const UserController = require("../controller/UserController");

const UserControllerInstance = new UserController();

userRouter.post("/register", UserControllerInstance.SignUp);

module.exports = userRouter;
