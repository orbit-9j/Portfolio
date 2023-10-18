import React from "react";

export default function AboutMe() {
  return (
    <section className="project-desc">
      <h1>About Me</h1>
      <div className="textContainer">
        <p>
          Hi there! I'm a Cardiff-based computer science graduate who's looking
          for a new challenge. I graduated from Cardiff University in 2023 with
          a Bachelor of Science in Computer Science with Security and Forensics,
          with First Class Honours. I'm currently working on a few passion
          projects, which you can check out in my portfolio.
        </p>{" "}
        {/* //add link to e-certificate when it's available */}
      </div>

      <div className="textContainer">
        <h2>Inspirations</h2>
        <p>
          I enjoy projects that combine coding and graphics, such as (but not
          limited to) video game and front end web development. I am also
          interested in creative fields such as storytelling and visual arts. I
          like using bright and dark colours in my designs, challenging the
          neutral black and white colour scheme norm. I want to designin
          websites that are fun and unique, yet clean and professional. Here are
          some of my inspirations.
        </p>
        <h3>Websites</h3>
        <ul>
          <li>Skeuomorphism and glassmorphism</li>
          <li>Colours: black, green, orange, purple</li>
        </ul>
        <h3>Games</h3>
        <ul>
          <li>Horror fiction</li>
          <li>Surrealism</li>
          <li>Sci-fi, aliens, astronomy</li>
          <li>Pixel art top-down RPG games</li>
          <li>Satirical and absurdist humour</li>
        </ul>
      </div>

      {/* <div className="textContainer">
        <h2>Personal attributes</h2>
        <ul>
          <li>Thrives on routines</li>
          <li>Follows instructions precisely</li>
          <li>In continuous pursuit of organisation and perfection</li>
          <li>Takes comprehensive notes</li>
          <li>Notices and applies patterns</li>
          <li>Actively searches for ways to improve</li>
        </ul>
      </div> */}

      <div className="textContainer">
        <h2>Hobbies and Interests</h2>
        <ul>
          <li>Knowledge management</li>
          <li>Speedcubing</li>
          <ul>
            <li>3x3 Personal Best: 40 seconds</li>
          </ul>
          <li>Languages</li>
          <ul>
            <li>Fluent: English, Russian</li>
            <li>Conversational: Portuguese, Spanish</li>
          </ul>
          <li>Oil pastel, mixed media, digital art</li>
          <li>Skateboarding</li>
          <li>Alternative music</li>
        </ul>
      </div>

      <div className="textContainer">
        <h2>Future goals</h2>
        <ul>
          <li>Learn the Godot game engine</li>
          <li>Make a full-length game in my art style</li>
          <li>Improve UI design skills</li>
          <li>Practise JavaScript and Vue JS</li>
        </ul>
      </div>
    </section>
  );
}
