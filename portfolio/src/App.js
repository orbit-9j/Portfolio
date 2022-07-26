import Header from "./modules/Header";
import Footer from "./modules/Footer";
import games from "./data/games";

import ProjectPage from "./pages/Project";
import Home from "./pages/Home";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const items = games;
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/Portfolio" element={<Home />} />
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
        <Footer />
      </Router>
    </>
  );
}

export default App;
