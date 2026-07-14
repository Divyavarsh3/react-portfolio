import "./Contact.css";
import portfolioData from "../../constants/portfolioData";

const Contact = () => {

  const { personal } = portfolioData;

  return (

    <section className="contact">

      <h1>Contact Me</h1>

      

      <div className="contact-container">

        <div className="contact-info">

          <h2>Get In Touch</h2>

          <div className="info-box">
            <h3>📧 Email</h3>
            <p>{personal.email}</p>
          </div>

          <div className="info-box">
            <h3>📞 Phone</h3>
            <p>{personal.phone}</p>
          </div>

          <div className="info-box">
            <h3>📍 Location</h3>
            <p>{personal.location}</p>
          </div>

          <div className="info-box">
            <h3>💼 LinkedIn</h3>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              {personal.linkedin}
            </a>

          </div>

          <div className="info-box">

            <h3>💻 GitHub</h3>

            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
            >
              {personal.github}
            </a>

          </div>

        </div>

      </div>

    </section>

  );

};

export default Contact;