import logo from "../assets/mylogo.png"
function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
      <a href="#hero">
        <img src={logo} alt="logo" />
      </a>
      </div>

      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar