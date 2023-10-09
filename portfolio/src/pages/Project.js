import React from "react";
import { useParams } from "react-router-dom";

//rewrite. like, if props.imgs then carousel, else no carousel just embedded images in specific sections
//---------------carousel------------------
function Image(Props) {
  var imagePath = process.env.PUBLIC_URL + "/images/";
  var image = imagePath + Props.img;
  //singular image for the carousel
  if (Props.active === true) {
    return (
      <li className="slide" data-active>
        <img src={image} title={Props.alt} alt={Props.alt} />
      </li>
    );
  } else {
    return (
      <li className="slide">
        <img src={image} title={Props.alt} alt={Props.alt} />
      </li>
    );
  }
}

// changes image carousel slide
function Button(e) {
  //code adapted from Web Dev Simplified on YouTube, https://www.youtube.com/watch?v=9HcxHDS2w1s
  var button = e.target;
  const offset = button.dataset.carouselButton === "next" ? 1 : -1;
  const slides = button
    .closest("[data-carousel]")
    .querySelector("[data-slides]");

  const activeSlide = slides.querySelector("[data-active]");
  let newIndex = [...slides.children].indexOf(activeSlide) + offset;
  if (newIndex < 0) newIndex = slides.children.length - 1;
  if (newIndex >= slides.children.length) newIndex = 0;

  slides.children[newIndex].dataset.active = true;
  delete activeSlide.dataset.active;
}

function Carousel(Props) {
  //receives image array from ProjectPage and creates their image elements
  const images = Props.IA.map((item) => {
    return (
      <Image
        key={item.id}
        img={item.image}
        alt={item.title}
        active={item.active}
      />
    );
  });

  return (
    <section aria-label="Project Screenshots">
      {/* //code adapted from Web Dev Simplified on YouTube, https://www.youtube.com/watch?v=9HcxHDS2w1s */}
      <div className="carousel" data-carousel>
        <button
          onClick={Button}
          className="carousel-button prev"
          data-carousel-button="prev"
        >
          &#8656;
        </button>
        <button
          onClick={Button}
          className="carousel-button next"
          data-carousel-button="next"
        >
          &#8658;
        </button>
        <ul data-slides>{images}</ul>
      </div>
    </section>
  );
}
//---------------carousel------------------

const ProjectPage = ({ items }) => {
  const { title } = useParams(); //receives the title of the page from the link
  return (
    <React.Fragment>
      {/* searches for the list item with this title in the games file */}
      {items
        .filter((game) => game.title === title)
        .map((game, index) => (
          <section key={index} className="project-desc">
            <h1>{game.title}</h1>
            {/*  <hr /> */}
            <Carousel IA={game.images} />

            <div>
              {game.cards.map((card, index) => (
                <div key={index} className="textContainer">
                  <h2>{card[0]}</h2>
                  {card.slice(1).map((content, index) =>
                    Array.isArray(content) ? (
                      <ul key={index}>
                        {content.map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p key={index}>{content}</p>
                    )
                  )}
                </div>
              ))}
            </div>

            <div className="button-wrapper">
              {game.githubLink ? (
                <a
                  className="view-github project-button button button-primary"
                  href={game.githubLink}
                  target="_blank"
                >
                  <button className="button button-primary project-button">
                    View Source
                  </button>
                </a>
              ) : null}

              {game.extraSources
                ? game.extraSources.map((source) => (
                    <a
                      key={Object.keys(source)[0]}
                      className="view-github project-button button button-secondary"
                      href={Object.values(source)[0]}
                      target="_blank"
                    >
                      <button className="button button-secondary project-button">
                        {Object.keys(source)[0]}
                      </button>
                    </a>
                  ))
                : null}
            </div>
          </section>
        ))}
    </React.Fragment>
  );
};

export default ProjectPage;
