import express from "express";
import { getTheUser, registerNewUser, } from "../../src/api/v1/controllers/userController.js";
import { loginUser } from "../../src/api/v1/controllers/loginController.js";
import { loginProtect } from "../../src/api/v1/middlewares/loginAuth.js";

export const router = express.Router();

router
  .route("/login")
  .post(
    // mail pass check,
    loginUser
  ) 
  .all(function (req, res, next) {
    res.status(405).json({ message: "not allowed" });
  }); 


router
  .route("/usuarios")
  .post(
  // validateRegister,
    registerNewUser
  ) 
  .get(
    loginProtect,
    getTheUser
  ) 
  .all(function (req, res, next) {
    res.status(405).json({ message: "not allowed" });
  }); 


