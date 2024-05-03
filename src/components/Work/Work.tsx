import BitmojiBriefcase from "../../assets/bitmoji-briefcase.png";

const Work = () => {
  return (
    <section className="work-section">
      <h1>Work Experience</h1>
      <div className="work-bitmoji-imgs">
        <img src={BitmojiBriefcase} alt="bitmoji with briefcase" />
      </div>
      <div className="work-item-wrapper">
        <div className="work-item-header">
          <h3>Software Engineer Intern</h3>
          
          <span>{/* Underline */}</span>
        </div>
        <div className="work-item-subheader">
          <p>Osensa Innovations Corp.</p>
          <p>May 1st - Sep 1st 2023</p>
        </div>
        <ul className="work-item-description">
          <li><p>Developed an RPC system for EdgePi, a cutting-edge IoT cloud device, using Python for the server.</p></li>
          <li><p>Coded a client in TypeScript to interact with the RPC Python server.</p></li>
          <li><p>Designed and implemented custom Node-RED nodes with the TypeScript client to enhance user-friendliness and accessibility for EdgePi users.</p></li>
        </ul>
        <ul className="work-item-tech">
          {/* tech items */}
          <li>Python</li>
          <li>TypeScript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Jest</li>
          <li>PyTest</li>
        </ul>
      </div>
     
    </section>
  )
}

export default Work;