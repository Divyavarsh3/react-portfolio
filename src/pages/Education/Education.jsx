import "./Education.css";
import portfolioData from "../../constants/portfolioData";

const Education = () => {
  const { education } = portfolioData;

  return (
    <section className="education">

      <h1>Education</h1>

      <p className="education-subtitle">
        My academic journey and educational background.
      </p>

      <div className="education-container">

        {education.map((item, index) => (

          <div className="education-card" key={index}>

            <h2>{item.degree}</h2>

            <h3>{item.specialization}</h3>

            <h4>{item.college || item.school}</h4>

            {item.cgpa && (
              <p><strong>CGPA:</strong> {item.cgpa}</p>
            )}

            {item.percentage && (
              <p><strong>Percentage:</strong> {item.percentage}</p>
            )}

            <span>{item.year}</span>

          </div>

        ))}

      </div>

    </section>
  );
};

export default Education;