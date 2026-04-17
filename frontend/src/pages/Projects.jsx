import { useEffect, useState } from "react";
import API from "../services/api";

function Projects() {

const [projects,setProjects] = useState([]);

useEffect(()=>{
  API.get("/api/projects")
    .then(res=>setProjects(res.data))
    .catch(err=>console.log(err));
},[]);

return (
<section id="projects" className="section">
<h2>Projects</h2>

<div className="projects-grid">
{projects.map(project => (
<div className="project-card" key={project._id}>
<h3>{project.name}</h3>
<p>{project.description}</p>
</div>
))}
</div>

</section>
)
}

export default Projects;