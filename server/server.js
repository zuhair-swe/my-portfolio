import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import contactRoutes from "./routes/contactRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import projects from "./routes/projects.js";
import skills from "./routes/skills.js";
import resume from "./routes/resume.js";
import path from "path"



dotenv.config();
connectDB();

const app = express();

app.use(cors({
  origin:"*"
}));
app.use(express.json());

app.get("/api", (req, res) => {
  res.send("Portfolio API running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.use("/api/contact", contactRoutes);
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));app.use("/api/auth", authRoutes);
app.use("/api/projects", projects);
app.use("/api/skills", skills);
app.use("/api/resume", resume);