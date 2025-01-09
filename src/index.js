import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import six from "./Assets/6.png";
import two from "./Assets/2.png";
import three from "./Assets/3.png";
import eight from "./Assets/8.png";
import candy from "./Assets/candy.png";
import sich from "./Assets/sich.png";

function App() {
  return (
    <div className="container">
      <Hero />
      <Main />
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <div>
      <section className="banner">
        <div className="content">
          <h1 className="left">Portfolio</h1>
          <div className="right">
            <h2>by Yash Vardhan</h2>
            <p>Full-Stack Developer</p>
          </div>
          <div className="image"></div>
        </div>
      </section>
    </div>
  );
}

function Main() {
  return (
    <div>
      <section className="grid grid-1">
        <figure>
          <img src={sich} alt="" />
        </figure>
        <figure>
          <img src={three} alt="" className="autoRotate three" />
        </figure>
        <h2 className="fade-in">Introduce</h2>
      </section>

      <section className="grid grid-2">
        <div className="fade-in">
          <figure>
            <img src={six} alt="" />
          </figure>
          <p>
            My name is Yash Vardhan, I am a 17 years old University student. I
            have a few passions <br></br>
            which include building websites and more using ReactJS, HTML, CSS,
            and JavaScript.
          </p>
        </div>
        <div className="fade-in">
          Mastering ReactJS, Tailwind CSS, and a suite of web design tools, I've
          crafted responsive and dynamic web applications that are both robust
          and user-friendly. Currently enrolled at Centurion University, my
          academic journey is intertwined with a passion for Full-Stack
          development. With Meta certifications in key areas like JavaScript and
          version control, my aim is to merge theoretical knowledge with
          practical skills to innovate and excel in the tech landscape.
        </div>

        <div className="fade-in">
          <figure>
            <img src={two} alt="" />
          </figure>
          <p>
            I am a passionate Full-Stack Developer with a keen interest in HTML,
            CSS, JavaScript, and ReactJS. Currently, I am on an exciting journey
            of continuous learning and growth, constantly exploring new
            technologies and improving my skills to build dynamic and responsive
            web applications. My dedication to mastering these tools is driven
            by a desire to innovate and excel in the tech landscape.
          </p>
        </div>
        <div className="fade-in">
          <figure>
            <img src={candy} alt="" />
          </figure>
        </div>
      </section>

      <section class="grid grid-3">
        <div className="autoBLur">YASH VARDHAN</div>
        <div className="autoBLur">FULLSTACK</div>
        <div className="autoBLur">DEVELOPER</div>
      </section>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <div className="grid grid-5 content">
        <div>
          <h2>Work-Experience</h2>
          Contributed to web development projects at Mapple Business Solutions
          and Unified Mentor during internships. Developed User Interfaces,
          Enhanced User Experience, Developed a Weather App, To-Do List App,
          Teacher-Student Booking Site and gained valuable experience in ReactJS
          and JavaScript.
        </div>
        <div>
          <h2>Education</h2>ᐧ Currently enrolled in Centurion University of
          Technology and Managment <br></br> - Major: Computer Science (AI/ML){" "}
          <br></br>ᐧ Completed my High School Education from St. Francis
          School/Ranchi Percentage: 75.8% <br></br>ᐧ Completed my Secondary
          School Education from St. Francis School/Ranchi Percentage: 74.6%
        </div>
        <div>
          <h2>Hire Me</h2>
          You can download my{" "}
          <a
            rel="noreferrer"
            target="_blank"
            href="https://drive.google.com/file/d/18rz3YVk_hDhtoJW9AxARkN2bR6PUVlCp/view?usp=sharing"
          >
            RESUME
          </a>{" "}
          by clicking{" "}
          <a
            rel="noreferrer"
            target="_blank"
            href="https://drive.google.com/file/d/18rz3YVk_hDhtoJW9AxARkN2bR6PUVlCp/view?usp=sharing"
          >
            RESUME
          </a>{" "}
          anywhere in the screen.
        </div>
        <div>
          <figure>
            <img src={eight} alt="" />
          </figure>
        </div>
      </div>
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
