import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

  <div className="footer-container">

    <h2 className="footer-logo">Zuhair Hussain</h2>

    <p className="footer-text">
      Software Engineer | MERN Stack Developer
    </p>

    <div className="footer-icons">
      <a href="https://www.github.com/zuhair-swe"><FaGithub /></a>
      <a href="https://www.linkedin.com/in/zuhair-swe/"><FaLinkedin /></a>
      <a href="https://x.com/zuhairhussainee?lang=ar-x-fm"><FaTwitter /></a>
      <a href="https://www.instagram.com/hussainee7272/?hl=en"><FaInstagram /></a>
      <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJNsMWdwnTJbjTGbshWHpKfJDXNLPMrGFfZnCZcCBgdtPkMGcXXFXbVPFSRPLcFrRCVvZlV"><FaEnvelope /></a>

    </div>

    <p className="copyright">
      © {new Date().getFullYear()} Zuhair Hussain. All rights reserved.
    </p>

  </div>

</footer>
  );
}

export default Footer;
