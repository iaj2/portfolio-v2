import EmailIcon from "../../assets/email.svg";
import LinkedinIcon from "../../assets/linkedin.svg";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h1>Contact Me</h1>
      <ul className="contact-methods">
        <li className="contact-method email">
          <a href="mailto:isaacanthonyj13@gmail.com">
            <img src={EmailIcon} alt="email" />
            <p>isaacanthonyj13@gmail.com</p>
          </a>
        </li>
        <li className="contact-method linkedin">
          <a href="https://www.linkedin.com/in/isaac-james-62765a278/" target="_blank">
            <img src={LinkedinIcon} alt="linkedin" />
            <p>Isaac James</p>
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Contact;