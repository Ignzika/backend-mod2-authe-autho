import { forRegisterNewUser, getAll } from "../models/userModel.js";
import { findError } from "../utils/utils.js";

// export const allUser = async (req, res, next) => {
// try {
//   const result = await getAll();
//   res.status(201).json({users: result})
// } catch (error) {
//   next(error)
// }
// };

export const registerNewUser = async (req, res, next) => {
  const user = req.body;

  try {
    const result = await forRegisterNewUser(user);

    res.status(201).json({ user: result });
  } catch (error) {
    next(error);
  }
};


//checkar los errores

export const notFound = (req, res) => {
  res.status(404).json({ error: "NOT FOUND" });
};
