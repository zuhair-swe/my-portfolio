import express from "express";
import upload from "../middleware/upload.js";
import Resume from "../models/Resume.js";

const router = express.Router();

router.post("/", upload.single("resume"), async (req, res) => {
  try{
    const resumePath = req.file.path;
    const resume = new Resume({
      fileUrl: resumePath
    })
    await resume.save();
    res.json({message:"Resume saved", resume: resumePath});

 
 }
 catch(error){
      res.status(500).json({ error: error.message });
 }
});

router.get("/", async (req, res) => {
  try {
    const resume = await Resume.findOne().sort({ _id: -1 }); // latest resume
    res.json(resume);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;