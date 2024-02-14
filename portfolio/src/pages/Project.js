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
      {/* searches for the list item with this title in the given file */}
      {items
        .filter((project) => project.title === title)
        .map((project, index) => (
          <section key={index} className="project-desc">
            <h1>{project.title}</h1>
            {/*  <hr /> */}
            <Carousel IA={project.images} />

            <div>
              {project.cards.map((card, index) => (
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
              {project.links
                ? project.links.map((link) =>
                    link.location ? (
                      <a
                        key={link.id}
                        href={
                          link.pdf
                            ? process.env.PUBLIC_URL + "/" + link.location
                            : link.location
                        }
                        className="button project-button button-primary"
                        target={link.internal ? "_self" : "_blank"}
                        rel={link.internal ? "" : "noopener noreferrer"}
                      >
                        {link.name}
                      </a>
                    ) : null
                  )
                : null}
            </div>
          </section>
        ))}
    </React.Fragment>
  );
};

export default ProjectPage;
