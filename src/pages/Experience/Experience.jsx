import "./Experience.css";
import portfolioData from "../../constants/portfolioData";

const Experience = () => {
  const { experience, training } = portfolioData;

  return (
    <section className="experience">

      {/* Experience Section */}

      <h1>Experience</h1>

      <p className="experience-subtitle">
        My professional experience and internship journey.
      </p>

      <div className="experience-container">

        {experience.map((item, index) => (

          <div className="experience-card" key={index}>

            <h2>{item.role}</h2>

            <h3>{item.company}</h3>

            <p className="duration">
              {item.duration}
            </p>

            <ul>

              {item.description.map((point, i) => (

                <li key={i}>
                  {point}
                </li>

              ))}

            </ul>

          </div>

        ))}

      </div>

      {/* Training Section */}

      <h1 className="training-title">
        Training
      </h1>

      <p className="experience-subtitle">
        Professional training and technical learning.
      </p>

      <div className="experience-container">

        {training.map((item, index) => (

          <div className="experience-card" key={index}>

            <h2>{item.course}</h2>

            <h3>{item.institute}</h3>

            <p className="duration">
              {item.location}
            </p>

            <ul>

              {item.description.map((point, i) => (

                <li key={i}>
                  {point}
                </li>

              ))}

            </ul>

          </div>

        ))}

      </div>

    </section>
  );
};

export default Experience;