import React from "react";
import { Link } from "react-router-dom";

function SidePanel() {
  var pdfPath = process.env.PUBLIC_URL + "/Austin_Tian_CV.pdf";
  var imagePath = process.env.PUBLIC_URL + "/images/side-panel/";
  const openSidePanel = () => {
    document.getElementById("sidePanel").style.height = "95vh";
    document.getElementById("sideContainer").style.display = "flex";
    document.getElementById("main").style.marginTop = "95vh";
    document.getElementById("open").style.display = "none";
    document.getElementById("close").style.display = "block";
  };
  const closeSidePanel = () => {
    document.getElementById("sidePanel").style.height = "null";
    document.getElementById("sideContainer").style.display = "none";
    document.getElementById("main").style.marginTop = "0";
    document.getElementById("open").style.display = "block";
    document.getElementById("close").style.display = "none";
  };
  return (
    <section id="sidePanel" className="sidePanel">
      <div className="strip">
        <span id="open" onClick={openSidePanel}>
          &#9776;
        </span>
        <span id="close" onClick={closeSidePanel}>
          &#10006;
        </span>
      </div>

      <div id="sideContainer" className="sideContainer">
        <div className="header">
          <Link to="/" className="link">
            <h1>Orbit 9-j</h1>
          </Link>
          <h2>Front End Web Developer</h2>
        </div>

        <nav>
          <a href={pdfPath} target="_blank">
            <button className="button">CV</button>
          </a>
          <a href="https://github.com/orbit-9j" target="_blank">
            <button className="button">GitHub</button>
          </a>
          {/* <a href="#"><button>About me</button></a> */}
        </nav>

        <div className="info">
          <div className="about">
            <h2 className="heading">About Me</h2>
            <p>
              Second year computer science student with an interest in graphical
              projects.
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
                src={imagePath + "java.png"}
                alt="Java logo"
                title="Java logo"
              ></img>
              <img
                src={imagePath + "unity.png"}
                alt="Unity logo"
                title="Unity logo"
              ></img>
            </div>
          </div>
          <div id="contact">
            <h2 className="heading">Contact Me</h2>
            <p>Austin Tian</p>
            <p>tianek@protonmail.com</p>
            <p>Cardiff, UK</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SidePanel;
