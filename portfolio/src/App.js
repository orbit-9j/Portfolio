import SidePanel from "./modules/SidePanel";

import games from "./data/games";

import ProjectPage from "./pages/Project";
import Home from "./pages/Home";

import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const items = games;
  return (
    <>
      <Router>
        <main>
          <SidePanel />
          <section id="main" className="mainPanel">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:title" element={<ProjectPage items={items} />} />
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
        </main>
      </Router>
    </>
  );
}

export default App;
