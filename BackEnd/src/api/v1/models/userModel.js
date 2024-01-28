import bcrypt from "bcryptjs";
import pool from "../../../../config/database/db.js";

export const getAll = async () => {
  const SQLquery = {
    text: "SELECT * FROM usuarios;"
  };
  const response = await pool.query(SQLquery);
  return response.rows;
};


export const forRegisterNewUser = async ({
  email,
  password,
  rol,
  lenguage,
}) => {
  const hashPassword = bcrypt.hashSync(password);

  try {
    const SQLquery = {
      text: "INSERT INTO usuarios (email ,password, rol, lenguage) VALUES ( $1, $2, $3, $4) returning *;",
      values: [email, hashPassword, rol, lenguage],
    };
    const response = await pool.query(SQLquery);
    return response.rows;
  } catch (error) {
    console.error("codigo error:", error.code, "->", error.message);
    throw new Error("codigo: " + error.code + " :" + error.message);
  }
};

