import { forAuth } from "../models/loginModel.js";
import { forRegisterNewUser } from "../models/userModel.js";

export const getTheUser = async (req, res, next) => {
  try {
    const user = req.user;

    console.log("consoleloh controller getuser: ", user);

    const result = await forAuth(user.email);
    res.status(201).json({ users: result });

    console.log("console log del controller...:", result);

    return result;
    
  } catch (error) {
    next(error);
  }
};

export const registerNewUser = async (req, res, next) => {
  try {
    const user = req.body;
    const result = await forRegisterNewUser(user);
    res.status(201).json({ user: result });
  } catch (error) {
    next(error);
  }
};

//checkar los errores

