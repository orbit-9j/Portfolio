import SidePanel from "./modules/SidePanel";
import Navbar from "./modules/Navbar";

import games from "./data/games";

import ProjectPage from "./pages/Project";
import Home from "./pages/Home";
import AboutMe from "./pages/About";

import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

/* import ScrollToTop from "react-router-scroll-top"; */ /* yarn add react-router-scroll-top - supposed to fix the new page loading in previous scrolling position */

function App() {
  const items = games;
  return (
    <Router>
      {/* <ScrollToTop> */}
      <main>
        <SidePanel />

        <section id="main" className="mainPanel">
          <section className="projects">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:title" element={<ProjectPage items={items} />} />
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
          </section>
        </section>
      </main>
      {/* </ScrollToTop> */}
    </Router>
  );
}

export default App;
