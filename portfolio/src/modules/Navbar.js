import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <a href="http://localhost:3001/Portfolio/">Home</a>
      <a href="https://github.com/orbit-9j" target="_blank">
        GitHub
      </a>
      <a
        href="https://github.com/orbit-9j/cv/blob/main/Rin_Tian_CV.pdf"
        target="_blank"
      >
        CV
      </a>
      <Link to="/About">About Me</Link>
    </nav>
  );
}

//buttons or no buttons?
/* 
<nav>
      <a href="http://localhost:3001/Portfolio/">
        {" "}
        <button className="button button-primary">Home</button>{" "}
      </a>
      <a href="https://github.com/orbit-9j" target="_blank">
        <button className="button button-primary">GitHub</button>
      </a>
      <a
        href="https://github.com/orbit-9j/cv/blob/main/Rin_Tian_CV.pdf"
        target="_blank"
      >
        <button className="button button-primary">CV</button>
      </a>
      <Link to="/About">
        <button className="button button-secondary">About Me</button>
      </Link>
    </nav> */
