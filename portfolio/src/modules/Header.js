import {Link} from "react-router-dom"

function scrollDown(){ //scrolls down to the About Me in the footer
  var element = document.getElementById("footer");
  element.scrollIntoView({behavior: "smooth"});
}

export default function Header(){
  var pdfPath = process.env.PUBLIC_URL+"/Austin_Tian_CV.pdf";
    return (
      <header>
        <div className="header">
          <div className="heading">
          <div className="heading__header-text">
                <Link to="/Portfolio" className="link"><h1>Austin Tian</h1></Link>
                <h3>Front End Web Developer</h3>
            </div>
        </div>
        </div>

        <nav className="nav">
            <div className="nav__links">
                <a href={pdfPath} target="_blank">CV</a>
                <a href="https://github.com/orbit-9j" target="_blank">GitHub</a>
                <a onClick={scrollDown}>About me</a>
            </div>
        </nav>
      </header>
    );
  }