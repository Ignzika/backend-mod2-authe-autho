import { forAuth, forRegisterNewUser } from "../models/models.js";
import { findError } from "../utils/utils.js";

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerNewUser = async (req, res, next) => {
  const user = req.body;

  try {
    const register = await forRegisterNewUser(user);

    res.status(201).json({ user: register });
  } catch (error) {
    next(error);
  }
};



//checkar los errores
export const loginUser = async (req, res, next) => {
  const user = req.body;
  try {
    const finder = await forAuth(user);

    if (!finder) {
      const errorFound = findError("auth_01");
      return res
        .status(errorFound[0].status)
        .json({ error: errorFound[0].message });
    } else {

      const compare = bcrypt.compareSync(user.password, finder.password);

      if (!compare) {
        const errorFound = findError("auth_02");
        return res
          .status(errorFound[0].status)
          .json({ error: errorFound[0].message });
      } else {
        const { email, lenguage } = finder;
        const token = jwt.sign( email , process.env.JWT_SECRET, {
          expiresIn: "30min",
        });
        res.status(200).json({
          message: `Welcome user: ${email}, now start to work on ${lenguage} until the end of the days... `,
          code: 200,
          token,
        });
      }
    }
  } catch (error) {
    next(error);
  }
};

export const notFound = (req, res) => {
  res.status(404).json({ error: "NOT FOUND" });
};
