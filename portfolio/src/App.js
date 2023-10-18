import SidePanel from "./modules/SidePanel";
import Navbar from "./modules/Navbar";

import games from "./data/games";
import activities from "./data/activities";

import ProjectPage from "./pages/Project";
import Home from "./pages/Home";
import AboutMe from "./pages/About";
import Activities from "./pages/Activities";
import CVs from "./pages/CVs";

import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  var imagePath = process.env.PUBLIC_URL + "/images/side-panel/";
  return (
    <Router>
      <main>
        <SidePanel />
        <section id="main" className="mainPanel">
          <Navbar />
          <section className="projects">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/games/:title"
                element={<ProjectPage items={games} />}
              />
              <Route
                path="/activities/:title"
                element={<ProjectPage items={activities} />}
              />
              <Route path="/Activities" element={<Activities />} />
              <Route path="/CVs" element={<CVs />} />
              <Route path="/About" element={<AboutMe />} />
              <Route
                path="*"
                element={
                  <div className="error">
                    <h1 className="error-message">
                      <hr />
                      Page Not Found
                      <hr />
                    </h1>
                  </div>
                }
              />
            </Routes>

            {/* duplicate panel as a quick fix for mobile. will later add the <SidePanel /> element and pass in an argument telling it its a footer */}
            <section id="footer" className="footer">
              <div id="sideContainer" className="sideContainer">
                <h1>Orbit 9-j</h1>

                <h2 className="subtitle">Game & Front End Web Developer</h2>

                <div className="about">
                  <h2 className="heading">Profile</h2>
                  <p>
                    Recent BSc Computer Science graduate with an interest in
                    graphical coding projects.
                  </p>
                </div>

                <div className="skills">
                  <h2 className="heading">Skills</h2>
                  <div className="skills__list">
                    <img
                      src={imagePath + "HTML5.png"}
                      alt="HTML5 logo"
                      title="HTML5 logo"
                    ></img>
                    <img
                      src={imagePath + "CSS3.png"}
                      alt="CSS3 logo"
                      title="CSS3 logo"
                    ></img>
                    <img
                      src={imagePath + "React.png"}
                      alt="React logo"
                      title="React logo"
                    ></img>
                    <img
                      src={imagePath + "python.png"}
                      alt="Python logo"
                      title="Python logo"
                    ></img>
                    <img
                      src={imagePath + "Java.png"}
                      alt="Java logo"
                      title="Java logo"
                    ></img>
                    <img
                      src={imagePath + "unity.png"}
                      alt="Unity logo"
                      title="Unity logo"
                    ></img>
                    <img
                      src={imagePath + "Csharp.png"}
                      alt="C# logo"
                      title="C# logo"
                    ></img>
                    <img
                      src={imagePath + "krita.png"}
                      alt="Krita logo"
                      title="Krita logo"
                    ></img>
                  </div>
                </div>

                <div id="contact">
                  <h2 className="heading">Contact Me</h2>
                  <p>Rin Tian</p>
                  <p>tianek@protonmail.com</p>
                  <p>Cardiff, UK</p>
                </div>
              </div>
            </section>
          </section>
        </section>
      </main>
      {/* </ScrollToTop> */}
    </Router>
  );
}

export default App;
