import "./Projects.css";
import portfolioData from "../../constants/portfolioData";

const Projects = () => {

    const { projects } = portfolioData;

    return (

        <section className="projects">

            <h1>My Projects</h1>

            <p className="project-subtitle">

                A collection of projects showcasing my knowledge in Artificial Intelligence,
                Machine Learning, Data Analytics and Software Development.

            </p>

            <div className="project-container">

                {

                    projects.map((project,index)=>(

                        <div className="project-card" key={index}>

                            <h2>{project.title}</h2>

                            <p className="description">

                                {project.description}

                            </p>

                            <div className="tech-stack">

                                {

                                    project.tech.map((tech,i)=>(

                                        <span key={i}>{tech}</span>

                                    ))

                                }

                            </div>

                        </div>

                    ))

                }

            </div>

        </section>

    )

}

export default Projects;