function Projects() {

  const projects = [
    {
      name: "LMS System",
      description: "Learning management system built with MERN stack"
    },
    {
      name: "Portfolio Website",
      description: "Personal developer portfolio using React"
    },
    {
      name: "Student Management",
      description: "CRUD system for managing students"
    }
  ]

  return (
    <section id="projects" className="section">

      <h2>Projects</h2>

      <div className="projects-grid">

        {projects.map(project => (
          <div className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
        ))}

      </div>

    </section>
  )
}

export default Projects