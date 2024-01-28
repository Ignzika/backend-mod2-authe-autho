import { forAuth } from "../models/loginModel.js";
import { findError } from "../utils/utils.js";

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


export const loginUser = async (req, res, next) => {
  const user = req.body;

  try {
    const finder = await forAuth(user.email);
    // console.log(finder)
    
    //refactorizacion ... creo ? XD
    // const compare = bcrypt.compareSync(user.password, finder.password);

    // !finder ? findError("auth_01") : !compare ? findError("auth_02") : null;
    
    // const { email, lenguage } = finder;
    // const token = jwt.sign({ email }, process.env.JWT_SECRET, {
    //   expiresIn: "7d",
    // });
    // res.status(200).json({
    //   message: `Welcome user: ${email}, now start to work on ${lenguage} until the end of the days... `,
    //   code: 200,
    //   token,
    // });

    // no refactorizacion

    
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
        const token = jwt.sign({ email }, process.env.JWT_SECRET, {
          expiresIn: "7d",
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

