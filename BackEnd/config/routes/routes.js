import express from "express";
import { loginUser, registerNewUser } from "../../src/api/v1/controllers/controllers.js";

export const router = express.Router();

router.post("/login",loginUser )
// router.post("/usuarios", );


// router
//   .route("/login")
// //   .get( ) 
//   .post( loginUser) 
//   .all(function (req, res, next) {
//     res.status(405).json({ message: "not allowed" });
//   }); 


router
  .route("/usuarios")
  .post( registerNewUser ) 
  // .get( ) 
  .all(function (req, res, next) {
    res.status(405).json({ message: "not allowed" });
  }); 

// router.use("*", ); // para routas que no existan
