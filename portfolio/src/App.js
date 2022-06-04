import Header from "./modules/Header"
import Footer from "./modules/Footer"

import ProjectPage from "./pages/Project"
import Home from "./pages/Home"

import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"

function App() {
  return (
  <>
       <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="*" element={<h1>Error!</h1>} />
        </Routes>
        <Footer />
      </Router>
  </>
  );
}

export default App;



