import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema({
  fileUrl: String
});

export default mongoose.model("Resume", resumeSchema);