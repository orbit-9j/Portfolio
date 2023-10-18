import React from "react";
import { Link } from "react-router-dom";

function SidePanel() {
  var imagePath = process.env.PUBLIC_URL + "/images/side-panel/";

  return (
    <section id="sidePanel" className="sidePanel">
      <div className="sideContainer">
        <Link to="/" className="link">
          <h1>Orbit 9-j</h1>
        </Link>

        <h2 className="subtitle">Game & Front End Web Developer</h2>

        <div className="about">
          <h2 className="heading">Profile</h2>
          <p>
            Recent BSc Computer Science graduate with an interest in graphical
            coding projects.
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
  );
}

export default SidePanel;
