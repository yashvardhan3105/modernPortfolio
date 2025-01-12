import React, { useState } from "react";
import "./Main.css";

const Main = ({ theme }) => {
  const [isOpen, setIsOpen] = useState("Unified Mentors");

  return (
    <div className="main_container">
      <div className="main_intro">
        <h5>Hey, I'm</h5>
        <h1 className="main_YashVardhan">Yash Vardhan</h1>
        <p>
          Mastering ReactJS, Tailwind CSS, and a suite of web design tools, I've
          crafted responsive and dynamic web applications that are both robust
          and user-friendly. Currently enrolled at Centurion University, my
          academic journey is intertwined with a passion for Full-Stack
          development. With Meta certifications in key areas like JavaScript and
          version control, my aim is to merge theoretical knowledge with
          practical skills to innovate and excel in the tech landscape.
        </p>
      </div>

      <div className="main_labels">
        <div className="main_labels_icons">
          <div className="main_labels_email">
            <div className="main_labels_border">
              <button
                className="main_labels_button"
                onClick={() =>
                  (window.location.href = "mailto:vardhan.yash3105@gmail.com")
                }
              >
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill={theme ? "black" : "white"}
                  viewBox="0 0 24 24"
                >
                  <path d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z" />
                  <path d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z" />
                </svg>
                <span className="main_labels_titles">Send an Email</span>
              </button>
            </div>
            <div className="main_labels_border">
              <button
                className="main_labels_button"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/vardhan-yash3105/",
                    "_blank"
                  )
                }
              >
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill={theme ? "black" : "white"}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                    clip-rule="evenodd"
                  />
                  <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                </svg>

                <span className="main_labels_titles">LinkedIn</span>
              </button>
            </div>
            <div className="main_labels_border_github">
              <button
                className="main_labels_button"
                onClick={() =>
                  window.open("https://github.com/yashvardhan3105", "_blank")
                }
              >
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill={theme ? "black" : "white"}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                    clip-rule="evenodd"
                  />
                </svg>

                <span className="main_labels_titles">GitHub</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="main_experience">
        <h3>EXPERIENCE</h3>
        <div className="main_experience_drops">
          <div className="main_experience_drops_titles">
            <div>
              <div>
                <button onClick={() => setIsOpen("Unified Mentors")}>
                  Unified Mentors
                </button>
              </div>

              <div>
                <button onClick={() => setIsOpen("Mapple Business Solutions")}>
                  Mapple Business Solutions
                </button>
              </div>
            </div>
            <div>
              {isOpen === "Unified Mentors" && (
                <div className="main_experience_drops_titles_padding">
                  <div>
                    <h5>Full-Stack Developer {`(Remote)`}</h5>
                    <p style={{ color: "aqua" }}>Dec 2024 - Jan 2025</p>
                    <p style={{ color: "gray" }}>
                      • Developed full-stack projects using JavaScript, HTML,
                      CSS, and ReactJs at Unified Mentor, optimizing website
                      performance.
                    </p>
                    <p style={{ color: "gray" }}>
                      • Collaborated with team members to enhance user
                      experience and ensure seamless functionality across
                      various devices.
                    </p>
                    <p style={{ color: "gray" }}>
                      • Implemented responsive design principles to create a
                      user-friendly interface for improved user engagement.
                    </p>
                  </div>
                </div>
              )}
              {isOpen === "Mapple Business Solutions" && (
                <div className="main_experience_drops_titles_padding">
                  <div>
                    <h5>Front-End Developer {`(Remote)`}</h5>
                    <p style={{ color: "aqua" }}>May 2024 - Aug 2025</p>
                    <p style={{ color: "gray" }}>
                      • Developed responsive web applications using ReactJs,
                      Tailwind CSS, HTML, and CSS.
                    </p>
                    <p style={{ color: "gray" }}>
                      • Collaborated with team members to implement dynamic
                      features for enhanced user experience.
                    </p>
                    <p style={{ color: "gray" }}>
                      • Utilized Git and Github for version control and project
                      collaboration.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <hr className="silver-line" />
      <div className="main_footer" id="Contact">
        <h3>HIRE ME</h3>
        <p>
          Download my{" "}
          <a
            rel="noreferrer"
            target="_blank"
            href="https://drive.google.com/file/d/18rz3YVk_hDhtoJW9AxARkN2bR6PUVlCp/view"
          >
            Resume
          </a>
        </p>
        <p>
          My mail:{" "}
          <span className="main_footer_email">vardhan.yash3105@gmail.com</span>
        </p>
        <p>My contact info: +91 8789867690</p>
      </div>
    </div>
  );
};

export default Main;
