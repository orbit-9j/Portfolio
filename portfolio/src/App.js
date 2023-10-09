import SidePanel from "./modules/SidePanel";
import Navbar from "./modules/Navbar";

import games from "./data/games";

import ProjectPage from "./pages/Project";
import Home from "./pages/Home";
import AboutMe from "./pages/About";
import Activities from "./pages/Activities";

import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

/* import ScrollToTop from "react-router-scroll-top"; */ /* yarn add react-router-scroll-top - supposed to fix the new page loading in previous scrolling position */

function App() {
  var imagePath = process.env.PUBLIC_URL + "/images/side-panel/";
  const items = games;
  return (
    <Router>
      {/* <ScrollToTop> */}
      <main>
        <SidePanel />
        <section id="main" className="mainPanel">
          <Navbar />
          <section className="projects">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:title" element={<ProjectPage items={items} />} />
              <Route path="/Activities" element={<Activities />} />
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
                    graphical projects.
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
