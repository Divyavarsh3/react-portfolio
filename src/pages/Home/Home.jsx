import "./Home.css";
import portfolioData from "../../constants/portfolioData";

const Home = () => {
  const { personal } = portfolioData;

  return (
    <section className="home">

      <div className="home-content">

        <div className="left-section">

          <p className="hello">👋 Hello, I'm</p>

          <h1>{personal.name}</h1>

          <h2>{personal.role.join(" | ")}</h2>

          <p className="summary">
            {personal.summary}
          </p>

        </div>

        <div className="right-section">

        </div>

      </div>

    </section>
  );
};

export default Home;