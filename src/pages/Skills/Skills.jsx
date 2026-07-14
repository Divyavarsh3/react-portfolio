import "./Skills.css";
import portfolioData from "../../constants/portfolioData";

const Skills = () => {
  const { skills } = portfolioData;

  return (
    <section className="skills">

      <h1>My Skills</h1>

      <div className="skills-container">

        <div className="skill-card">
          <h2>Programming Languages</h2>

          <div className="skill-list">
            {skills.programming.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        </div>

        <div className="skill-card">
          <h2>Python Libraries</h2>

          <div className="skill-list">
            {skills.pythonLibraries.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        </div>

        <div className="skill-card">
          <h2>AI & Machine Learning</h2>

          <div className="skill-list">
            {skills.ai.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        </div>

        <div className="skill-card">
          <h2>Web Technologies</h2>

          <div className="skill-list">
            {skills.web.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        </div>

        <div className="skill-card">
          <h2>Backend Technologies</h2>

          <div className="skill-list">
            {skills.backend.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        </div>

        <div className="skill-card">
          <h2>Database</h2>

          <div className="skill-list">
            {skills.database.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
};

export default Skills;