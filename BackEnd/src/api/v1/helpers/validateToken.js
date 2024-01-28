import jwt from "jsonwebtoken";


export const validateToken = async (token) => {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      return decoded;
    } catch (error) {
      console.log("auth_04", "Token no válido ", error);
    }
  };
