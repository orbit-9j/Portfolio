export default function Footer() {
  return (
    <footer id="footer">
      <div className="about">
        <h2 className="heading">About Me</h2>
        <p>
          Cardiff-based computer science student with an interest in graphical
          projects such as web and game development.
        </p>
      </div>
      <div className="skills">
        <h2 className="heading">Skills</h2>
        <div className="skills__list">
          <ul>
            <li>HTML, CSS, React, SQLPlus</li>
            <li>Python, Java, MATLAB</li>
            <li>Unity 2D</li>
          </ul>
        </div>
      </div>
      <div id="contact">
        <h2 className="heading">Contact Me</h2>
        <p>Austin Tian</p>
        <p>tianek@protonmail.com</p>
        <p>Cardiff, UK</p>
      </div>
    </footer>
  );
}
