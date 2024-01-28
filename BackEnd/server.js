import express from "express";
import { logger } from "logger-express";
import cors from "cors";
import { db, PORT } from "./config/database/config.js";
import { router } from "./config/routes/routes.js";

const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(logger());
app.use(router);

// app.use("/api/v1", userRoutes);
// app.use("/api/v1", travelsRouter);
// app.use("/api/v1", loginRoutes);

app.use((err, req, res, next) => {
  return res.status(500).json({
    status: "error",
    message: err.message + "... and is bad",
  });
});

app.listen(PORT, console.log(`👾 http://${db.host}:${PORT} 👾`));
