import express from "express";
import Skill from "../models/Skill.js";
// import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", async (req, res) => {
  res.json(await Skill.find());
});

router.post("/", async (req, res) => {
  const skill = new Skill(req.body);
  await skill.save();
  res.json(skill);
});

router.delete("/:id", async (req, res) => {
  await Skill.findByIdAndDelete(req.params.id);
  res.json({ message: "deleted" });
});

export default router;