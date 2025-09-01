import express from "express";
import studentRouter from "./routes/studentRoutes.js";
import mongoose from "mongoose";

const app = express();

app.use(express.json());

const port = 3000;

app.use("/student", studentRouter);

app.listen(port, async () => {
  const url =
    "mongodb+srv://rishi:G32Bkp182styCPLC@cluster0.npkwjlp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
  await mongoose.connect(url);
  console.log(`App listening on port http://localhost:${port}`);
});
