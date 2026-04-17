import { useEffect } from "react";
import API from "../services/api";
function Home() {
  useEffect(() => {
    API.get("/api")
      .then(res => console.log("response recieved", res.data))
      .catch(err => console.log(err));
  }, []);
  return (
    <div className="portfolio-container">
      
      <div className="left-container">

        <div className="icons">
          <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
          <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
          <a href="#"><i className="fa-brands fa-twitter"></i></a>
          <a href="#"><i className="fa-brands fa-instagram"></i></a>
        </div>

        <div className="content">
          <h2>Hi! I am Zuhair Hussain</h2>
          <h1>Software Engineer</h1>

          <p className="detail">
            Hello, I am a BS Software Engineering student at the University of Lahore.
            I love coding, problem solving and building software solutions.
          </p>

          <div className="btn-container">
            <button>Follow</button>
            <button>View Projects</button>
          </div>
        </div>

      </div>

      <div className="right-container">
        <div className="design">
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      </div>

    </div>
  );
}

export default Home;

