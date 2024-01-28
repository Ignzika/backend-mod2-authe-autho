import pool from "../../../../config/database/db.js";

export const forAuth = async (
    email,
) => {
  // console.log("email que llega:", email);
  try {
    const SQLquery = {
      text: "SELECT * FROM usuarios WHERE email = $1",
      values: [email],
    };
    const response = await pool.query(SQLquery);

    // console.log("response:", response.rows[0]);

    return response.rows[0];
  } catch (error) {
    console.error("codigo error:", error.code, "->", error.message);
    throw new Error("codigo: " + error.code + " :" + error.message);
  }
};


