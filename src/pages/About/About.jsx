import "./About.css";
import portfolioData from "../../constants/portfolioData";

const About = () => {
  const { personal } = portfolioData;

  return (
    <section className="about">

      <h1>About Me</h1>

      <div className="about-container">

        <div className="about-card">

          <h2>Who Am I?</h2>

          <p>
            {personal.summary}
          </p>

        </div>

        <div className="about-card">

          <h2>Career Objective</h2>

          <p>
            {personal.objective}
          </p>

        </div>

      </div>

    </section>
  );
};

export default About;