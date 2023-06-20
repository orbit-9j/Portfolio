import games from "../data/games";
import websites from "../data/websites";

import { Link } from "react-router-dom";

function Body() {
  //creates cards for games or websites depending on the input file
  const gameCards = games.map((item) => {
    var imagePath = process.env.PUBLIC_URL + "/images/" + item.image;
    return (
      <Card
        key={item.id}
        type="game"
        img={imagePath}
        title={item.title}
        desc={item.description}
        button="View Details"
        link={`/${item.title}`}
        githubLink={item.githubLink ? item.githubLink : null}
        //githubLink={item.githubLink}
        content={item.content}
        id={item.id}
      />
    );
  });

  const websiteCards = websites.map((item) => {
    var imagePath = process.env.PUBLIC_URL + "/images/" + item.image;
    return (
      <Card
        key={item.id}
        type="site"
        img={imagePath}
        title={item.title}
        desc={item.description}
        button="Go To Site"
        siteLink={item.websiteLink}
        githubLink={item.githubLink}
      />
    );
  });

  return (
    <section className="projects">
      <h1>My Projects</h1>

      <hr />
      <h2 className="projects__category">Websites</h2>
      <div className="grid">{websiteCards}</div>

      <hr />
      <h2 className="projects__category">Games</h2>
      <div className="grid">{gameCards}</div>
    </section>
  );
}

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
  } else {
    return (
      <a
        className="view-button button button-primary"
        href={Props.siteLink}
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
      <img className="image" src={Props.img} alt="" />
      <div className="contents">
        <h3 className="title">{Props.title}</h3>
        <p className="description">{Props.desc}</p>
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

export default function Home() {
  return (
    <div>
      <Body />
    </div>
  );
}
