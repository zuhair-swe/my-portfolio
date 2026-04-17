import profile from "../assets/profile.jpg"
import { useState, useEffect } from "react";
import API from "../services/api";


function Hero() {
  const [resume, setResume] = useState("");

  useEffect(() => {
  API.get("/api/resume")
    .then(res => setResume(res.data))
    .catch(err => console.log(err));
}, []);

  return (
    <section id="hero" className="hero">

      <div className="hero-text">
        <h2>Hello I'm</h2>
        <h1>Zuhair Hussain</h1>
        <h3>Software Engineer</h3>

        <p>
          BS Software Engineering student passionate about building
          modern web applications and solving real world problems.
        </p>

        <div className="hero-buttons">

    <a href={`http://localhost:5000/${resume.fileUrl}`} target="_blank">
      <button className="btn">
            View Resume
          </button>
    </a>

    <a href={`http://localhost:5000/${resume.fileUrl}`} download>
      <button className="btn-outline">
            Download Resume
          </button>
    </a>
        </div>
      </div>

      <div className="hero-img">
        <img src={profile} alt="profile" />
      </div>

    </section>
  )
}

export default Hero