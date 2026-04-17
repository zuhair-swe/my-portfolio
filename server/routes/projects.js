import express from "express";
import Project from "../models/Project.js";
// import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const data = await Project.find();
  res.json(data);
});

router.post("/", async (req, res) => {
  const project = new Project(req.body);
  await project.save();
  res.json(project);
});

router.put("/:id", async (req, res) => {
  const updated = await Project.findByIdAndUpdate(req.params.id, req.body);
  res.json(updated);
});

router.delete("/:id", async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

export default router;