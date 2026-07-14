import "./Certifications.css";
import portfolioData from "../../constants/portfolioData";

const Certifications = () => {
  const { certifications } = portfolioData;

  return (
    <section className="certifications">

      <h1>Certifications</h1>

      <p className="sub-heading">
        Professional certifications and achievements that demonstrate my
        continuous learning journey.
      </p>

      <div className="certificate-container">

        {certifications.map((certificate, index) => (

          <div className="certificate-card" key={index}>

            <div className="certificate-icon">
              🏆
            </div>

            <h2>{certificate}</h2>

          </div>

        ))}

      </div>

    </section>
  );
};

export default Certifications;