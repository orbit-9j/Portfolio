import games from "../data/games"
import websites from "../data/websites"

import {Link} from "react-router-dom"

function Body(){

  //creates cards for games or websites depending on the input file
  const gameCards = games.map(item =>{
    var imagePath = process.env.PUBLIC_URL+"/images/"+item.image;
    return(
      <Card
        key = {item.id}
        img = {imagePath}
        title = {item.title}
        desc = {item.description}
        button = "View Details"
        link = "/project"
        githubLink = {item.githubLink}
        id = {item.id}
      />
    );
  })

  const websiteCards = websites.map(item =>{
    var imagePath = process.env.PUBLIC_URL+"/images/"+item.image;
    return(
      <Card
        key = {item.id}
        img = {imagePath}
        title = {item.title}
        desc = {item.description}
        button = "Go To Site"
        siteLink = {item.websiteLink}
        githubLink = {item.githubLink}
      />
    );
  })

  return(
    <section className="projects">
        <h1>My Projects</h1>

        <hr/>
        <h3 className="projects__category">Games</h3>
        <div className="grid">
          {gameCards}
        </div>
    
        <hr/>
        <h3 className="projects__category">Websites</h3>
        <div className="grid">
          {websiteCards}
        </div>
    </section>
  );
}

function LinkDecider(Props){ //decides whether to open a project page (for a game) or an external website (for a website)
  if(Props.link == "/project"){
    return(<Link className="view-button button" to={Props.link} state={Props.id}>{Props.button}</Link>);
  }
  else{
    return(<a className="view-button button" href={Props.siteLink} target="_blank">{Props.button}</a>);
  }
}

function Card(Props){
  return(
    <div className="project">
          <img className="image" src={Props.img} alt=""/>
          <div className="project__contents">
              <h3 className="title">{Props.title}</h3>
              <p className="description">{Props.desc}</p>
              <div className="buttons">
                  {LinkDecider(Props)}
                  <a className="view-button button" href={Props.githubLink} target="_blank">View On Github</a>
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

