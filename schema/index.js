import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: String,
  rollNo: Number,
  class: String,
});

export const studentModel = mongoose.model("studentModel", schema);
