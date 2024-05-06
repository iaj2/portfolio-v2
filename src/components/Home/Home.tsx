import HandWaveIcon from "../../assets/hand-wave.png";
import BitmojiSlideIn from "../../assets/bitmoji-slidin.png";
import GithubIcon from "../../assets/github.svg";
import LinkedInIcon from "../../assets/linkedin.svg";


const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-header">
        <h1>Hi,</h1>
        <img src={HandWaveIcon} alt="hand waving" className="home-hand-icon" />
        <h1>I'm Isaac</h1>
      </div>
      <img src={BitmojiSlideIn} alt="bitmoji slidin' in"  className="home-bitmoji-img"/>
      <div className="home-txt-wrapper">
        <p className="home-txt">
          I'm an SFU student passionate about software and business development.
        </p>
        <p className="home-txt">
          Explore my website to learn more about me and the work I’ve done!
          </p>
      </div>
      <div className="home-socials">
        <a href="https://github.com/iaj2" target="_blank">
          <img src={GithubIcon} alt="github" />
          </a>
        <a href="https://www.linkedin.com/in/isaac-james-62765a278/" target="_blank">
          <img src={LinkedInIcon} alt="LinkedIn" />
          </a>
      </div>
    </section>
  )
}

export default Home;