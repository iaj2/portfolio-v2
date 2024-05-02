import EmailIcon from "../../assets/email.svg";
import LinkedinIcon from "../../assets/linkedin.svg";

const Contact = () => {
  return (
    <section className="contact-section">
      <h1>Contact Me</h1>
      <ul className="contact-methods">
        <li className="contact-method email">
          <img src={EmailIcon} alt="email" />
          <p>isaacanthonyj13@gmail.com</p>
        </li>
        <li className="contact-method linkedin">
          <img src={LinkedinIcon} alt="linkedin" />
          <p>Isaac James</p>
        </li>
      </ul>
    </section>
  )
}

export default Contact;