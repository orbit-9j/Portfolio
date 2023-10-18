import activities from "../data/activities";

import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Activities() {
  return (
    <React.Fragment>
      <h1>Activities</h1>
      <div>
        <hr />
        <h2 className="projects__category"></h2>
        <div className="grid">
          {activities.map((card) => (
            <Card
              title={card.title}
              img={process.env.PUBLIC_URL + "/images/" + card.img}
              timestamp={card.timestamp}
              location={card.location}
              desc={card.description}
              id={card.id}
              contents={card.contents}
            />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

function Card(Props) {
  return (
    <div className="project">
      <div className="image-container">
        <img className="image" src={Props.img} alt="" />
      </div>

      <div className="contents">
        <div>
          <h3 className="title">{Props.title}</h3>
          <p className="timestamp">{Props.timestamp}</p>
          <p className="timestamp">{Props.location}</p>
        </div>
        <div>
          <p className="description">{Props.desc}</p>
        </div>

        <div className="buttons">
          <Link
            className="view-button button button-primary"
            to={`/activities/${Props.title}`}
            state={Props.id}
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
