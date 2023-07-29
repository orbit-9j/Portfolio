import React from "react";

export default function AboutMe() {
  return (
    <section className="projects project-desc">
      <h1>About Me</h1>
      <div className="textContainer">
        <p>
          I graduated from Cardiff University with a Bachelor of Science in
          Computer Science with Security and Forensics, with First Class
          Honours.
        </p>{" "}
        {/* //add link to e-certificate when it's available */}
        <p>
          I enjoy projects that combine coding and graphics, such as (but not
          limited to) video game and front end web development. I am also
          interested in creative fields such as storytelling and visual arts. I
          am interested in using bright and dark colours in my designs, straying
          from the neutral black and white colour scheme norm. I have taken on
          the challenge of designing websites that are fun and unique, while
          also looking clean and smart. My designs are partly inspired by the
          nostalgia of old 2010s blog websites and skeuomorphic UI.
        </p>
      </div>

      <div className="textContainer">
        <h2>Inspirations</h2>
        <ul>
          <li>Horror fiction</li>
          <li>Surrealism</li>
          <li>Sci-fi, aliens, astronomy</li>
          <li>Pixel art top-down RPG games</li>
          <li>Satirical and absurdist humour</li>
          <li>Skeuomorphism and glassmorphism</li>
          <li>Colours: black, green, orange, purple</li>
        </ul>
      </div>

      <div className="textContainer">
        <h2>Hobbies</h2>
        <ul>
          <li>Skateboarding</li>
          <li>Oil pastel, mixed media, digital art</li>
          <li>Knowledge management</li>
          <li>Alternative music</li>
          <li>Speedcubing</li>
          <li>Languages</li>
          <ul>
            <li>Fluent: English, Russian</li>
            <li>Conversational: Portuguese, Spanish</li>
          </ul>
        </ul>
      </div>

      <div className="textContainer">
        <h2>Future goals</h2>
        <ul>
          <li>Learn the Godot game engine</li>
          <li>Make a full-length game in my art style</li>
          <li>Improve UI design skills</li>
          <li>Work on my JavaScript skills</li>
        </ul>
      </div>
    </section>
  );
}
