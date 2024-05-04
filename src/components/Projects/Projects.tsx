import BitmojiComputer from "../../assets/bitmoji-computer.png";
import GithubIcon from "../../assets/github.svg";
import RightArrowIcon from "../../assets/right-arrow.svg";

const Projects = () => {
  return (
    <section className="projects-section">
      <h1>Projects</h1>
      <div className="projects-bitmoji-imgs">
        <img src={BitmojiComputer} alt="bitmoji on computer" />
      </div>
      <div className="projects-item-wrapper">
        <div className="projects-item-header">
          <h3>BattleShip</h3>
          <span>{/*Underline */}</span>
        </div>
        <p className="projects-item-description">
        A Python-based battleship game with three levels of difficulty. Full features such as dragging and rotating ships, a main menu, and game restart.
        </p>
        <ul className="projects-item-tech">
          <li>Python</li>
          <li>PyGame</li>
        </ul>
        <button className="projects-item-github">
          <img src={GithubIcon} alt="github" />
          <p>Description & Code</p>
          <img src={RightArrowIcon} alt="right arrow" />
        </button>
      </div>
      <div className="projects-item-wrapper">
        <div className="projects-item-header">
          <h3>BattleShip</h3>
          <span>{/*Underline */}</span>
        </div>
        <p className="projects-item-description">
        A Python-based battleship game with three levels of difficulty. Full features such as dragging and rotating ships, a main menu, and game restart.
        </p>
        <ul className="projects-item-tech">
          <li>Python</li>
          <li>PyGame</li>
        </ul>
        <button className="projects-item-github">
          <img src={GithubIcon} alt="github" />
          <p>Description & Code</p>
          <img src={RightArrowIcon} alt="right arrow" />
        </button>
      </div>
      <div className="projects-github-cta">
        <p>View more on GitHub</p>
        <img src={RightArrowIcon} alt="right" />
      </div>
    </section>
  )
}

export default Projects;