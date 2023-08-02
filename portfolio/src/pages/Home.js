import games from "../data/games";
import websites from "../data/websites";
import other from "../data/other";

import React, { useState } from "react";
import { Link } from "react-router-dom";

function Body() {
  const cards = [...websites, ...games, ...other];

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

  return (
    <section className="projects">
      <div className="header">
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

      {/* the card attributes are currently being reworked */}
      <div>
        {selectedType === "all" ? (
          Object.entries(groupedCards).map(([type, cards]) => (
            <div key={type}>
              <hr />
              {titleDeciderAll(type)}
              <div className="grid">
                {cards.map((card) => (
                  <Card
                    key={card.id}
                    type={card.type}
                    img={process.env.PUBLIC_URL + "/images/" + card.image}
                    title={card.title}
                    desc={card.description}
                    score={card.score ? card.score : null}
                    button={
                      card.type === "website" ? "Go To Site" : "View Details"
                    }
                    link={
                      card.type == "website"
                        ? card.websiteLink
                        : `/${card.title}`
                    }
                    githubLink={card.githubLink ? card.githubLink : null}
                    path={
                      card.path
                        ? process.env.PUBLIC_URL + "/" + card.path
                        : null
                    }
                    content={card.content ? card.content : null}
                    id={card.id}
                    timestamp={card.timestamp}
                  />
                ))}
              </div>
            </div>
          ))
        ) : (
          <div>
            <hr />
            {titleDecider()}
            <div className="grid">
              {groupedCards[selectedType].map((card) => (
                <Card
                  key={card.id}
                  type={card.type}
                  img={process.env.PUBLIC_URL + "/images/" + card.image}
                  title={card.title}
                  desc={card.description}
                  score={card.score ? card.score : null}
                  button={
                    card.type === "website" ? "Go To Site" : "View Details"
                  }
                  link={
                    card.type == "website" ? card.websiteLink : `/${card.title}`
                  }
                  githubLink={card.githubLink ? card.githubLink : null}
                  path={
                    card.path ? process.env.PUBLIC_URL + "/" + card.path : null
                  }
                  content={card.content ? card.content : null}
                  id={card.id}
                  timestamp={card.timestamp}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

/* 
button={
  card.type === "website"
    ? "Go To Site"
    : card.type === "other" && card.path === null
    ? null
    : "View Details"
} */

//i'm currently reworking the way this part of code works, WIP
function LinkDecider(Props) {
  //decides whether to open a project page (for a game) or an external website (for a website)
  if (Props.type === "game") {
    return (
      <Link
        className="view-button button button-primary"
        to={Props.link}
        state={Props.id}
      >
        {Props.button}
      </Link>
    );
  } else if (Props.type == "website") {
    return (
      <a
        className="view-button button button-primary"
        href={Props.link}
        target="_blank"
      >
        {Props.button}
      </a>
    );
  } else {
    return (
      <a
        className="view-button button button-primary"
        href={Props.path}
        target="_blank"
      >
        {Props.button}
      </a>
    );
  }
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
          {LinkDecider(Props)} {/*project page vs site webpage*/}
          {Props.githubLink !== null ? (
            <a className="view-button" href={Props.githubLink} target="_blank">
              <button className="button button-secondary">View Source</button>
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}

{
  /* {Props.path !== null ? (
            <a className="view-button" href={Props.path} target="_blank">
              <button className="button button-primary">View Details</button>
            </a>
          ) : Props.otherLink !== null ? (
            <a className="view-button" href={Props.otherLink} target="_blank">
              <button className="button button-primary">View Details</button>
            </a>
          ) : null}
          ; */
}

export default function Home() {
  return (
    <div>
      <Body />
    </div>
  );
}
