import profile from "../assets/profile.jpg"

function Hero() {
 
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
          <a href="#projects">
          <button className="btn">View Projects</button>
          </a>
          <button className="btn-outline">Contact Me</button>
        </div>
      </div>

      <div className="hero-img">
        <img src={profile} alt="profile" />
      </div>

    </section>
  )
}

export default Hero