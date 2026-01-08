// // Packages
// import express from "express";
// import cookieParser from "cookie-parser";
// import dotenv from "dotenv";
// import path from "path";

// // Files
// import connectDB from "./config/db.js";
// import userRoutes from "./routes/userRoutes.js";
// import genreRoutes from "./routes/genreRoutes.js";
// import moviesRoutes from "./routes/moviesRoutes.js";
// import uploadRoutes from "./routes/uploadRoutes.js";

// // Configuration
// dotenv.config();
// connectDB();

// const app = express();

// // middlewares
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());

// const PORT = process.env.PORT || 3000;

// // Routes
// app.use("/api/v1/users", userRoutes);
// app.use("/api/v1/genre", genreRoutes);
// app.use("/api/v1/movies", moviesRoutes);
// app.use("/api/v1/upload", uploadRoutes);

// const __dirname = path.resolve();
// app.use("/uploads", express.static(path.join(__dirname + "/uploads")));

// app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

// export default app

import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";

import connectDB from "../config/db.js";
import userRoutes from "../routes/userRoutes.js";
import genreRoutes from "../routes/genreRoutes.js";
import moviesRoutes from "../routes/moviesRoutes.js";
import uploadRoutes from "../routes/uploadRoutes.js";

dotenv.config();
connectDB();

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// routes
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/genre", genreRoutes);
app.use("/api/v1/movies", moviesRoutes);
app.use("/api/v1/upload", uploadRoutes);

// static
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

app.get("/", (req, res) => {
  res.json({
    message: "Backend API is running 🚀",
    status: "OK"
  });
});

app.get("/favicon.ico", (req, res) => res.status(204));

import cors from "cors";

app.use(
  cors({
    origin: [
      "https://frontend-xxxx.vercel.app",
    ],
    credentials: true,
  })
);

export default app;