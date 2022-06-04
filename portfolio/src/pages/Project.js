import { useLocation } from "react-router-dom"

function Image(Props){ //singular image for the carousel
    if (Props.active === true){
      return(
        <li className="slide" data-active>
          <img src={Props.img} title={Props.alt} alt={Props.alt}/>
        </li>
      );
    }

    else{
      return(
        <li className="slide">
          <img src={Props.img} title={Props.alt} alt={Props.alt}/>
        </li>
      );
    }
}

// changes image carousel slide
function Button(e){ //code adapted from Web Dev Simplified on YouTube, https://www.youtube.com/watch?v=9HcxHDS2w1s
  var button = e.target;
  const offset = button.dataset.carouselButton === "next" ? 1 : -1
  const slides = button.closest("[data-carousel]").querySelector("[data-slides]")

  const activeSlide = slides.querySelector("[data-active]")
  let newIndex = [...slides.children].indexOf(activeSlide) + offset
  if (newIndex < 0) newIndex = slides.children.length - 1
  if (newIndex >= slides.children.length) newIndex = 0

  slides.children[newIndex].dataset.active = true
  delete activeSlide.dataset.active
}

function Carousel(Props){ //receives image array from ProjectPage and creates their image elements
  const images = Props.IA.map(item =>{
    return(
      <Image
        key = {item.id}
        img = {item.image}
        alt = {item.title}
        active = {item.active}
      />
    );
  })

  return(
    <section aria-label="Project Screenshots"> {/* //code adapted from Web Dev Simplified on YouTube, https://www.youtube.com/watch?v=9HcxHDS2w1s */}
      <div className="carousel" data-carousel>
        <button onClick={Button} className="carousel-button prev" data-carousel-button="prev">&#8656;</button>
        <button onClick={Button} className="carousel-button next" data-carousel-button="next">&#8658;</button>
        <ul data-slides>
          {images}
        </ul>
      </div>
    </section>
  );
}

function ProjectPage(Props) {
  const location = useLocation();
  const projectP = location.state; //keeps track of what project the user clicked on in the home page, determined by the project's ID in the database
  var imageArray = [];
  var imagePath = process.env.PUBLIC_URL+"images/";

  //compares project IDs to the number passed to this page
  if (projectP == "1"){// if-else statement because there are only 2 items, will need re-writing later for scalability
    
    imageArray = [
      {id: "1", active: true, title: "start menu", image: imagePath + "PD1.png"},
      {id: "2", active: false, title: "lobby menu", image:imagePath + "PD2.png"},
      {id: "3", active: false, title: "game screen", image:imagePath + "PD3a.png"},
      {id: "4", active: false, title: "game screen", image:imagePath + "PD3.png"},
      {id: "5", active: false, title: "current floor generation", image:imagePath + "PD4.png"},
      {id: "6", active: false, title: "old floor generation", image:imagePath + "PD5.png"},
      {id: "7", active: false, title: "minimap", image:imagePath + "PD6.png"},
      {id: "8", active: false, title: "puzzle example", image:imagePath + "PD7.png"},
      {id: "9", active: false, title: "puzzle example", image:imagePath + "PD7a.png"},
      {id: "10", active: false, title: "puzzle interactivity demonstration", image:imagePath + "PD8.png"},
      {id: "13", active: false, title: "puzzle interactivity demonstration", image:imagePath + "PD8a.png"},
      {id: "11", active: false, title: "puzzle interactivity demonstration", image:imagePath + "PD9.png"},
      {id: "12", active: false, title: "tilesets", image:imagePath + "PD10.png"}

    ];
    
    return(
        <section className="projects project-desc">
        <h1>Puzzle Dungeon: a Multiplayer Puzzle Game</h1>
        <Carousel IA = {imageArray}/>
        <h2>Project overview</h2>
        <p>A multiplayer Unity game developed in collaboration with 2 coursemates for a group project module.</p>
        <p>Every year the inhabitants of the underground (Humans, Wizards, and Monsters) host a puzzle dungeon constest in which they determine the smartest creatures in the world. Only teams consisting of creatures of each race can enter the contest. Does your team have what it takes to win?</p>
        <p>The game uses class mechanics to encourage players to collaborate, supporting one team of 4 players at a time.</p>
        <ul>
          <li><strong>Knight</strong>: moves crates out of the way</li>
          <li><strong>Wizard</strong>: melts ice that is blocking the path</li>
          <li><strong>Archer</strong>: shoots arrows at targets to open doors and enable other puzzle elements</li>
          <li><strong>Lizard</strong>: digs in dig spots to find items that can be traded with an NPC</li>
        </ul>
        <p>The players must complete all the puzzles in a level to proceed to the next level. There are 3 levels: green, orange, and purple. Each level has a different room shape to reflect the domain it is based in. The Human dungeon is an orange castle, the Wizard dungeon is a purple maze, and the Monster dungeon is a green cave. This game was a proof of concept and therefore only one level has been made.</p>
        <p>The game is hosted on a player's machine and can be accessed by other players using the host's IP address.</p>
        <h2>My contribution to the project:</h2>
        <ul>
          <li>Menu implementation</li>
          <li>Hosting, joining, and leaving the game</li>
          <li>Randomly allocating player classes upon joining the game</li>
          <li>Random level generation (2 different algorithms)</li>
          <li>Minimap</li>
          <li>Basic player movement</li>
          <li>Initial puzzle element functionality</li>
        </ul>
        <h2>Throughout development I learned:</h2>
        <ul>
          <li>Unity2D basics</li>
          <li>ParrelSync extension</li>
          <li>Mirror library</li>
          <li>Version control with Git</li>
        </ul>
        <h2>Credits</h2>
        <ul>
          <li>Rhys Fourie: tileset and character sprites recolour, puzzle room designs</li>
          <li>Sam Thornton: multiplayer puzzle synchronising, final puzzle functionality, improved collisions</li>
          <li>0x72 on itch.io: original tileset</li>
        </ul>
        <a className="view-github project-button button" href="https://github.com/orbit-9j/Puzzle-Dungeon" target="_blank">View On Github</a>
      </section>)
  }
  else if(projectP == "2"){
    imageArray = [
      {id: "1", active: true, title: "start menu screen", image: imagePath + "start.png"},
      {id: "2", active: false, title: "game state at start", image: imagePath + "img1.png"},
      {id: "3", active: false, title: "sitting unafilliated crow", image: imagePath + "img2.png"},
      {id: "4", active: false, title: "recruited crow", image: imagePath + "img3.png"},
      {id: "5", active: false, title: "crows shitting sprite", image: imagePath + "img4.png"},
      {id: "6", active: false, title: "shit landed on ground sprite", image: imagePath + "img5.png"},
      {id: "7", active: false, title: "crow movement direction and reaper NPC sprite", image: imagePath + "img6.png"},
      {id: "8", active: false, title: "crows have defeated the reaper: kill count increase and reaper is gone", image: imagePath + "img7.png"}
    ];

    return (
      <section className="projects project-desc">
        <h1>Menace Simulator</h1>
        <Carousel IA = {imageArray}/>
        <h2>Project Overview</h2>
        <p>Have you ever wondered what it is like to be a crow? Well now you have the answer! Fly above a magic garden, make crow friends, and lead your murder into a one-sided battle with death itself. Not even the grim reapers can survive the never-ending blasts of bird shit -- assert dominance over mortality!</p>
        <p>This singleplayer game was made for a 5-hour game jam hosted by CyberSoc in collaboration with my sister and with the help of free pizza. This is a top-down 2-D shooter game where you are a crow who poops on grim reapers using the space button to evade your own demise. wWen in proximity of a sitting crow, the crow is added to your murder, increasing your poop firepower. A kill counter is incremented with every reaper death. Currently there is no win condition and only one level due to the limited time I had to develop this game.</p>
        <h2>Credits</h2>
        <ul>
          <li>nast: character art</li>
          <li>Cainos on itch.io: tileset</li>
          <li>ansimuz on itch.io: menu background</li>
          <li>mounirtohami on itch.io: menu buttons</li>
        </ul>
        <a className="view-github project-button button" href="https://github.com/orbit-9j/Menace-Simulator" target="_blank">View On Github</a>        
      </section>    
    );}
  }
  
  export default ProjectPage;
  