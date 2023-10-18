import { Link } from "react-router-dom";

export default function Navbar() {
  const openSidePanel = () => {
    document.getElementById("menu-container").style.height = "100%";
    document.getElementById("menu-container").style.display = "flex";
    document.getElementById("open").style.display = "none";
    document.getElementById("close").style.display = "block";
  };
  const closeSidePanel = () => {
    document.getElementById("menu-container").style.height = "null";
    document.getElementById("menu-container").style.display = "none";
    /* document.getElementById("main").style.marginTop = "0"; */
    document.getElementById("open").style.display = "block";
    document.getElementById("close").style.display = "none";
  };

  return (
    <nav>
      <div className="strip">
        <span id="open" onClick={openSidePanel}>
          &#9776;
        </span>
        <span id="close" onClick={closeSidePanel}>
          &#10006;
        </span>
      </div>

      <div id="menu-container">
        <Link to="/" className="link">
          Portfolio
        </Link>
        <Link to="/activities" className="link">
          Activities
        </Link>
        <a href="https://github.com/orbit-9j" target="_blank">
          GitHub
        </a>
        <Link to="/CVs" className="link">
          CV
        </Link>
        <Link to="/About">About Me</Link>
      </div>
    </nav>
  );
}
