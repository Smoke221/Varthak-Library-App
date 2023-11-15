const express = require("express");
const { userRegister, userLogin } = require("../controllers/userController");

const userRouter = express.Router();

userRouter.post("/signup", userRegister);
userRouter.post("/login", userLogin)

module.exports = { userRouter };
