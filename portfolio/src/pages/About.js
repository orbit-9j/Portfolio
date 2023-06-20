import React from "react";

export default function AboutMe() {
  return (
    <section className="projects project-desc">
      <h1>About Me</h1>
      <div className="textContainer">
        <h2>Inspirations</h2>
        <ul>
          <li>Horror fiction</li>
          <li>Surrealism</li>
          <li>Sci-fi, aliens, astronomy</li>
          <li>Pixel art top-down RPG games</li>
          <li>Satirical and absurdist humour</li>
          <li>Skeuomorphism and glassmorphism</li>
        </ul>
      </div>
      <div className="textContainer">
        <h2>Hobbies</h2>
        <ul>
          <li>Skateboarding</li>
          <li>Oil pastel, mixed media, digital art</li>
          <li>Knowledge management</li>
          <li>Alternative music</li>
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
