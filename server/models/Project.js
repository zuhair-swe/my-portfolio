import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  name: String,
  description: String,
  github: String
}, { timestamps: true });

export default mongoose.model("Project", ProjectSchema);