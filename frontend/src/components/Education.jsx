function Education() {
  return (
    <section id="education"className="section education">
      <h2>Education</h2>

      <div className="education-card">
        <h3>Bachelor of Software Engineering</h3>
        <p className="edu-university">
          University of Lahore, Pakistan
        </p>
        <p className="edu-year">Graduation: 2026</p>

        <h4>Relevant Coursework</h4>
        <ul>
          <li>Data Structures & Algorithms</li>
          <li>Database Systems</li>
          <li>Object-Oriented Programming</li>
          <li>Web Development</li>
        </ul>

        <h4>Projects & Skills</h4>
        <ul>
          <li>Built full-stack apps using React, Node.js, Express, MongoDB</li>
          <li>Implemented JWT authentication, sessions, cookies</li>
          <li>Developed Admin, Teacher, Student dashboards</li>
        </ul>
      </div>
    </section>
  );
}

export default Education;