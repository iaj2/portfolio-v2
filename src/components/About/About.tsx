import BitmojiCoffee from "../../assets/bitmoji-coffee.png";
import BitmojiVball from "../../assets/bitmoji-vball.png";
import skillsData from "./skillsData.json";


const About = () => {

  return (
    <section id="about" className="about-section">
      <h1 className="about-h1">About Me</h1>
      <p className="about-txt">
        I’m a self-motivated and disciplined student at SFU, 
        pursuing a major in Computing Science and a minor in Business. 
        My goal is to merge my passion for technology and business strategy to 
        contribute to innovative software solutions that drive positive change in industries. 
        I’m excited about the opportunities to learn and grow in the dynamic field of software 
        development.
      </p>
      <h2 className="about-skills-h2">SKILLS</h2>
      <ul className="about-skill-items">
        {skillsData.skills.map((data, index)=> (
          data.fileName && data.alt ?
          <li key={index}>
            <img src={`./src/assets/${data.fileName}`} alt={data.alt} />
            <p>{data.alt}</p>
          </li>
          :
          <></>
        ))}
      </ul>
      <h2 className="about-interests-h2">INTERESTS</h2>
      <p className="about-interests-txt">
        When I’m not in front of a computer screen,
        I’m probably at the gym, playing volleyball,
          or sipping on some iced coffee at a nice coffee shop.
      </p>
      <div className="about-bitmoji-imgs">
        <img src={BitmojiVball} alt="bitmoji playing volleyball" />
        <img src={BitmojiCoffee} alt="bitmoji drinking coffee" />
      </div>
    </section>
  )
}

export default About;