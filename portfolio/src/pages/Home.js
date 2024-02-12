import games from "../data/games";
import websites from "../data/websites";
import other from "../data/other";

import React, { useState } from "react";
import { Link } from "react-router-dom";

function Body() {
  const cards = [...websites, ...games, ...other];

  //--------------------------------- start filter buttons ---------------------------------
  const [selectedType, setSelectedType] = useState("featured");

  //decides on the title for the section of cards
  const titleDecider = () => {
    var finalType = "";
    switch (selectedType) {
      case "featured":
        finalType = "Featured";
        break;
      case "website":
        finalType = "Websites";
        break;
      case "game":
        finalType = "Games";
        break;
      case "other":
        finalType = "Other";
        break;
    }
    return <h2 className="projects__category">{finalType}</h2>;
  };

  //holds cards of selected type
  const filteredCards =
    selectedType === "featured"
      ? cards.filter((card) => card.featured)
      : cards.filter((card) => card.type === selectedType);

  /* //create an array of unique card types for the buttons
  const cardTypes = [
    "featured",
    ...new Set(
      cards.map((card) => {
        switch (card.type) {
          case "game":
            return "games";
          case "website":
            return "websites";
          default:
            return card.type; // If no plural form is specified, use the original type
        }
      })
    ),
  ]; */

  //create an array of unique card types for the buttons
  const cardTypes = [
    "featured",
    ...new Set(
      cards.map((card) => {
        return card.type;
      })
    ),
  ];

  // handle the filter button click event
  const handleTypeChange = (type) => {
    /* const singularType =
      type === "games" ? "game" : type === "websites" ? "website" : type;
    setSelectedType(singularType); */
    setSelectedType(type);
  };

  //--------------------------------- end filter buttons ---------------------------------

  function CardComponent({ card }) {
    //a component that assigns values to Card. i specifically made it its own thing because Card is called twice in the body code and it would be a pain to change the arguments in 2 separate places if needed
    return (
      <Card
        key={card.id}
        type={card.type}
        img={process.env.PUBLIC_URL + "/images/" + card.image}
        title={card.title}
        desc={card.description}
        score={card.score ? card.score : null}
        links={card.links}
        id={card.id}
        timestamp={card.timestamp}
      />
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
          </div>
          <div>
            <p className="description">{Props.desc}</p>
            {Props.score !== null ? (
              <p className="score">Scored {Props.score} in assessment</p>
            ) : null}
          </div>

          <div className="buttons">
            {Props.links.slice(0, 2).map((link) =>
              link.location ? (
                <a
                  key={link.id}
                  href={
                    link.pdf
                      ? process.env.PUBLIC_URL + "/" + link.location
                      : link.location
                  }
                  className={`button ${
                    link.primary ? "button-primary" : "button-secondary"
                  }`}
                  target={link.internal ? "_self" : "_blank"}
                  rel={link.internal ? "" : "noopener noreferrer"}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.id}
                  to={`/games/${Props.title}`}
                  className={`button ${
                    link.primary ? "button-primary" : "button-secondary"
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <React.Fragment>
      <div className="header">
        <h1>My Projects</h1>
        <div className="filter">
          <label>
            <i class="fa fa-filter"></i>
          </label>
          <div className="buttons">
            {cardTypes.map((type) => (
              <button
                key={type}
                className={`filter-button button ${
                  selectedType === type ? "button-primary" : "button-secondary"
                }`}
                onClick={() => handleTypeChange(type)}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div>
        <hr />
        <div>
          {titleDecider()}
          <div className="grid">
            {filteredCards.map((card) => (
              <CardComponent card={card} />
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default function Home() {
  return <Body />;
}
