function Experience() {
  return (
    <section id="experience" className="section experience">
      <h2>Experience</h2>

      <div className="experience-card">
        <h3>Full Stack Developer (Project Experience)</h3>
        <p className="exp-company">Self Projects | 2024 – Present</p>

        <ul>
          <li>Developed full-stack apps using React, Node.js, Express, MongoDB</li>
          <li>Built authentication systems using JWT, sessions, cookies</li>
          <li>Created Admin, Teacher, Student dashboards</li>
          <li>Implemented REST APIs and backend integration</li>
          <li>Used Git & GitHub for version control</li>
        </ul>
      </div>

      <div className="experience-card">
        <h3>Frontend Development</h3>
        <p className="exp-company">Personal & Academic Projects</p>

        <ul>
          <li>Designed responsive landing pages</li>
          <li>Built modern UI components using React</li>
          <li>Implemented routing and lazy loading</li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;