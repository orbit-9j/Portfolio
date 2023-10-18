import cvs from "../data/cvs";

import React, { useState } from "react";

export default function CVs() {
  return (
    <React.Fragment>
      <h1>CVs</h1>
      <div>
        <hr />
        <h2 className="projects__category"></h2>
        <div className="grid">
          {cvs.map((card) => (
            <Card
              title={card.title}
              img={process.env.PUBLIC_URL + "/images/" + card.img}
              desc={card.description}
              id={card.id}
              PDFlink={card.PDFlink}
              GHlink={card.GHlink}
            />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

function Card(Props) {
  return (
    <div className="project" key={Props.id}>
      <div className="image-container">
        <img className="image" src={Props.img} alt="" />
      </div>

      <div className="contents">
        <div>
          <h3 className="title">{Props.title}</h3>
        </div>
        <div>
          <p className="description">{Props.desc}</p>
        </div>

        <div className="buttons">
          <a
            className=" button button-primary"
            href={Props.PDFlink}
            target="_blank"
          >
            View CV
          </a>
          <a
            className=" button button-secondary"
            href={Props.GHlink}
            target="_blank"
          >
            View source
          </a>
        </div>
      </div>
    </div>
  );
}
