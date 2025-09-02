import { studentModel } from "../schema/index.js";
import { Router } from "express";

const studentRouter = Router();

studentRouter.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const { name } = request.query;
    let data = await studentModel.find();
    if (name) {
      data = await studentModel.find({ name });
    }
    if (id) {
      data = await studentModel.findById(id);
    }
    return response.status(200).json({ data });
  } catch (err) {
    console.log("Error", err);
    return response.status(500).json({ error: err });
  }
});

studentRouter.put("/", async (request, response) => {
  try {
    const { name, rollNo } = request.body;
    const data = await studentModel.create({ name, rollNo, class: "5th" });
    return response.status(200).json({ data });
  } catch (err) {
    console.log("Error", err);
    return response.status(500).json({ error: err });
  }
});

studentRouter.patch("/", async (request, response) => {
  const { id, data } = request.body;
  const update = await studentModel.findByIdAndUpdate(id, {
    name: data?.name,
    rollNo: data?.rollNo,
    class: data?.class,
  });

  return response.status(200).json({ data: update });
});

studentRouter.delete("/", async (request, response) => {
  const { id } = request.body;

  const deletedData = await studentModel.findByIdAndDelete(id);

  return response.status(200).json({ data: deletedData });
});

export default studentRouter;
