import { validateToken } from "../helpers/validateToken.js";

export const loginProtect = async (req, res, next) => {
  const header = req.headers.authorization;

  try {
    if (!req.header) {
      console.log("auth_03", "token no encontrado");
      return;
    } else {
      const token = req.header("Authorization").split(" ")[1];
      // console.log("token:", token)
      const tokenData = await validateToken(token);
      req.user = tokenData;
      console.log("console.log de loginauth", req.user);
      next();
    }
  } catch (error) {
    console.error("codigo error:", error.code, "->", error.message);
  }
};
