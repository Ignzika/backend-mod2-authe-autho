import pool from "../../../../config/database/db.js";

export const forAuth = async (
    email,
) => {
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

// response: {
//   pk_id: 3,
//   id: 'fece0a6f-ef09-4440-be44-c2718fe3a532',
//   email: 'docente@desafiolatam.com',
//   password: '$2a$10$w7XoRle5jpU9KKn8hZzXe.TOHVoj47t9T9CIo8gZdn9zHwb4B4cAe',
//   rol: 'Full Stack Developer',
//   lenguage: 'JavaScript',
//   created_at: 2024-01-28T15:39:26.740Z,
//   updated_at: 2024-01-28T15:39:26.740Z
// }