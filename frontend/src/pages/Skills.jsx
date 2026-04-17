import { useEffect, useState } from "react";
import API from "../services/api";

function Skills() {

const [skills,setSkills] = useState([]);

useEffect(()=>{
  API.get("/api/skills")
    .then(res=>setSkills(res.data))
    .catch(err=>console.log(err));
},[]);

return (
<section id="skills" className="section">

<h2>Skills</h2>

<div className="skills-grid">
{skills.map(skill => (
<div className="skill-card" key={skill._id}>
{skill.name}
</div>
))}
</div>

</section>
)
}

export default Skills;