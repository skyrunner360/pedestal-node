import express from "express";
import studentRouter from "./routes/studentRoutes.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());

const port = 3000;

app.use("/student", studentRouter);

app.listen(port, async () => {
  const url = process.env.MONGO_URL || "mongodb://localhost:27017/";
  await mongoose.connect(url);
  console.log(`App listening on port http://localhost:${port}`);
});
