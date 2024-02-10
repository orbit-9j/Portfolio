import games from "../data/games";
import websites from "../data/websites";
import other from "../data/other";

import React, { useState } from "react";
import { Link } from "react-router-dom";

function Body() {
  const cards = [...websites, ...games, ...other];

  //--------------------------------- start filter dropdown ---------------------------------

  const [selectedType, setSelectedType] = useState("all");

  //update the state with new filter
  const handleFilterChange = (newFilter) => {
    setSelectedType(newFilter);
  };

  //holds cards of selected type
  const filteredCards =
    selectedType === "all"
      ? cards
      : cards.filter((card) => card.type === selectedType);

  //create an array of unique card types for the dropdown
  const cardTypes = ["all", ...new Set(cards.map((card) => card.type))];

  // Group the cards by their types
  const groupedCards = cards.reduce((acc, card) => {
    const { type } = card;
    if (!acc[type]) {
      acc[type] = [];
    }
    acc[type].push(card);
    return acc;
  }, {});

  //handle the dropdown change event
  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  //rough idea, will need to condense these 2 methods later
  const titleDecider = () => {
    var finalType = "";
    switch (selectedType) {
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

  const titleDeciderAll = (type) => {
    var finalType = "";
    switch (type) {
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

  //--------------------------------- end filter dropdown ---------------------------------

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
        <div className="spacer"></div>
        <h1>My Projects</h1>
        <div className="filter">
          <label>
            <i class="fa fa-filter"></i>
          </label>
          <select value={selectedType} onChange={handleTypeChange}>
            {cardTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <hr />
        {selectedType === "all" ? (
          Object.entries(groupedCards).map(([type, cards]) => (
            <div key={type}>
              {titleDeciderAll(type)}
              <div className="grid">
                {cards.map((card) => (
                  <CardComponent card={card} />
                ))}
              </div>
            </div>
          ))
        ) : (
          <div>
            {titleDecider()}
            <div className="grid">
              {groupedCards[selectedType].map((card) => (
                <CardComponent card={card} />
              ))}
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

export default function Home() {
  return <Body />;
}
