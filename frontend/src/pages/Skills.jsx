function Skills() {

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "MongoDB",
    "Express",
    "Git"
  ]

  return (
    <section id="skills" className="section">

      <h2>Skills</h2>

      <div className="skills-grid">
        {skills.map(skill => (
          <div className="skill-card">{skill}</div>
        ))}
      </div>

    </section>
  )
}

export default Skills