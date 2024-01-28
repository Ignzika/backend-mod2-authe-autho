import { forRegisterNewUser } from "../models/models.js";


export const registerNewUser = async (req, res, next) => {
  const  user  = req.body;

  try {
    const register = await forRegisterNewUser(user);
      
    console.log(register);

    res.status(201).json({ user: register });

  } catch (error) {

    next(error);
  }
};







export const notFound = (req, res) => {
  res.status(404).json({ error: "NOT FOUND" });
};
