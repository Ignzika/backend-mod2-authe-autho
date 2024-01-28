import bcrypt from "bcryptjs";
import pool from "../../../../config/database/db.js";

const registerUser = async ({ email, password, rol, lenguage }) => {
  try {
    const cryptidPassword = bcrypt.hashSync(password);
    const SQLquery = {
      text: "INSERT INTO usuarios (email ,password, rol, lenguage) VALUES ( $1, $2, $3, $4)",
      values: [email, password, rol, lenguage],
    };
    const response = await pool.query(SQLquery);
    console.log(SQLquery);

      return response.rows;
      
  } catch (error) {
    // console.table(error)
    console.error("codigo error:", error.code, "->", error.message);
    throw new Error("codigo: " + error.code + " :" + error.message);
  }
};



