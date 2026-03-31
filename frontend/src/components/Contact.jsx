function Contact() {
  return (
    <section id="contact" className="section">

      <h2>Contact</h2>

      <form className="contact-form">

        <input type="text" placeholder="Your Name" />

        <input type="email" placeholder="Email" />

        <textarea placeholder="Message"></textarea>

        <button className="btn">Send Message</button>

      </form>

    </section>
  )
}

export default Contact