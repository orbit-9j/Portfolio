export default [
  {
    id: 1,
    image: "PD.png",
    title: "Puzzle Dungeon: a Multiplayer Puzzle Game",
    description:
      "A multiplayer dungeon-crawler puzzle game made with Unity & the Mirror library (completed 16/05/2022)",
    githubLink: "https://github.com/orbit-9j/Puzzle-Dungeon",
    images: [
      {
        id: "1",
        active: true,
        title: "start menu",
        image: "PD/PD1.png",
      },
      {
        id: "2",
        active: false,
        title: "lobby menu",
        image: "PD/PD2.png",
      },
      {
        id: "3",
        active: false,
        title: "game screen",
        image: "PD/PD3a.png",
      },
      {
        id: "4",
        active: false,
        title: "game screen",
        image: "PD/PD3.png",
      },
      {
        id: "5",
        active: false,
        title: "current floor generation",
        image: "PD/PD4.png",
      },
      {
        id: "6",
        active: false,
        title: "old floor generation",
        image: "PD/PD5.png",
      },
      {
        id: "7",
        active: false,
        title: "minimap",
        image: "PD/PD6.png",
      },
      {
        id: "8",
        active: false,
        title: "puzzle example",
        image: "PD/PD7.png",
      },
      {
        id: "9",
        active: false,
        title: "puzzle example",
        image: "PD/PD7a.png",
      },
      {
        id: "10",
        active: false,
        title: "puzzle interactivity demonstration",
        image: "PD/PD8.png",
      },
      {
        id: "13",
        active: false,
        title: "puzzle interactivity demonstration",
        image: "PD/PD8a.png",
      },
      {
        id: "11",
        active: false,
        title: "puzzle interactivity demonstration",
        image: "PD/PD9.png",
      },
      {
        id: "12",
        active: false,
        title: "tilesets",
        image: "PD/PD10.png",
      },
    ],
    content:
      "<div className='textContainer'><h2>Project overview</h2>    <p>      A multiplayer Unity game developed in collaboration with 2 coursemates      for a group project module.    </p>    <p>      Every year the inhabitants of the underground (Humans, Wizards, and      Monsters) host a puzzle dungeon contest in which they determine the      smartest creatures in the world. Only teams consisting of creatures of      each race can enter the contest. Does your team have what it takes to      win?    </p>    <p>      The game uses class mechanics to encourage players to collaborate,      supporting one team of 4 players at a time.    </p>    <ul>      <li>        <strong>Knight</strong>: moves crates out of the way      </li>      <li>        <strong>Wizard</strong>: melts ice that is blocking the path      </li>      <li>        <strong>Archer</strong>: shoots arrows at targets to open doors and        enable other puzzle elements      </li>      <li>        <strong>Lizard</strong>: digs in dig spots to find items that can be        traded with an NPC      </li>    </ul>    <p>      The players must complete all the puzzles in a level to proceed to the      next level. There are 3 levels: green, orange, and purple. Each level      has a different room shape to reflect the domain it is based in. The      Human dungeon is an orange castle, the Wizard dungeon is a purple      maze, and the Monster dungeon is a green cave. This game was a proof      of concept and therefore only one level has been made.    </p>    <p>      The game is hosted on a player's machine and can be accessed by other      players using the host's IP address.    </p>    </div><div className='textContainer'><h2>My contribution to the project:</h2>    <ul>      <li>Menu implementation</li>      <li>Hosting, joining, and leaving the game</li>      <li>Randomly allocating player classes upon joining the game</li>      <li>Random level generation (2 different algorithms)</li>      <li>Minimap</li>      <li>Basic player movement</li>      <li>Initial puzzle element functionality</li>    </ul> </div>   <div className='textContainer'><h2>Throughout development I learned:</h2>    <ul>      <li>Unity2D basics</li>      <li>ParrelSync extension</li>      <li>Mirror library</li>      <li>Version control with Git</li>    </ul>    </div><div className='textContainer'><h2>Credits</h2>    <ul>      <li>        Rhys Fourie: tileset and character sprites recolour, puzzle room        designs      </li>      <li>        Sam Thornton: multiplayer puzzle synchronising, final puzzle        functionality, improved collisions      </li>      <li>0x72 on itch.io: original tileset</li>    </ul></div>",
  },

  {
    id: 2,
    image: "MS.png",
    title: "Menace Simulator",
    description:
      "Developed in the CyberSoc-led game jam, a game about being a crow (completed 19/03/2022)",
    githubLink: "https://github.com/orbit-9j/Menace-Simulator",
    images: [
      {
        id: "1",
        active: true,
        title: "start menu screen",
        image: "MS/start.png",
      },
      {
        id: "2",
        active: false,
        title: "game state at start",
        image: "MS/img1.png",
      },
      {
        id: "3",
        active: false,
        title: "sitting unafilliated crow",
        image: "MS/img2.png",
      },
      {
        id: "4",
        active: false,
        title: "recruited crow",
        image: "MS/img3.png",
      },
      {
        id: "5",
        active: false,
        title: "crows shitting sprite",
        image: "MS/img4.png",
      },
      {
        id: "6",
        active: false,
        title: "shit landed on ground sprite",
        image: "MS/img5.png",
      },
      {
        id: "7",
        active: false,
        title: "crow movement direction and reaper NPC sprite",
        image: "MS/img6.png",
      },
      {
        id: "8",
        active: false,
        title:
          "crows have defeated the reaper: kill count increase and reaper is gone",
        image: "MS/img7.png",
      },
    ],
    content:
      "<div className='textContainer'><h2>Project Overview</h2>    <p>      Have you ever wondered what it is like to be a crow? Well now you have      the answer! Fly above a magic garden, make crow friends, and lead your      murder into a one-sided battle with death itself. Not even the grim      reapers can survive the never-ending blasts of bird shit -- assert      dominance over mortality!    </p>    <p>      This singleplayer game was made for a 5-hour game jam hosted by      CyberSoc in collaboration with my sister and with the help of free      pizza. This is a top-down 2-D shooter game where you are a crow who      poops on grim reapers using the space button to evade your own demise.      When in proximity of a sitting crow, the crow is added to your murder,      increasing your poop firepower. A kill counter is incremented with      every reaper death. Currently there is no win condition and only one      level due to the limited time I had to develop this game.    </p>    </div><div className='textContainer'><h2>Credits</h2>    <ul>      <li>nast: character art</li>      <li>Cainos on itch.io: tileset</li>      <li>ansimuz on itch.io: menu background</li>      <li>mounirtohami on itch.io: menu buttons</li>    </ul></div>",
  },
];
