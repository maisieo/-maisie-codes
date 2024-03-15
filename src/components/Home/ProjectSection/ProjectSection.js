import React from "react";
import { Link } from "react-router-dom";
import "./ProjectSection.scss";

let projects = [
  {
    id: 1,
    title: "This website!",
    skills: ["React", "SCSS", "Javascript"],
    imageUrl: "/assets/imgs/Calculator.jpg",
    githubUrl: "https://github.com/maisieo/-maisie-codes",
    liveUrl: "https://github.com/maisieo/-maisie-codes",
  },
  {
    id: 1,
    title: "Calculator app",
    skills: ["HTML", "CSS", "JavaScript"],
    imageUrl: "/assets/imgs/Calculator.jpg",
    githubUrl: "https://github.com/maisieo/calculator-app/",
    liveUrl: "https://calculator-app-maisie.netlify.app/",
  },
  {
    id: 2,
    title: "Live client websites",
    skills: ["HTML", "CSS", "Javascript", "LWC"],
    imageUrl: "assets/imgs/Q-restaurant-page.JPG",
    githubUrl: null,
    liveUrl: "/live-client-websites",
  },
  {
    id: 3,
    title: "Client website 2",
    skills: ["HTML", "CSS", "Javascript"],
    imageUrl: "assets/imgs/CB.jpg",
    githubUrl: "https://www.closebrothers.com/",
    liveUrl: "https://www.closebrothers.com/",
  },
  {
    id: 4,
    title: "Email Builds",
    skills: ["React", "Node.js"],
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/ec87/6c36/0e50169307231e9f96a3eefbc3920fb5?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IhayQBk1vAgvTMx1Zfrdx3j~RJ9bi63ePWIypcO2JssNxGNUe0rKFxnrZ0EIzAlH4xb4CgtdPKWpQ-KoFhZMs1K6Dn~tdje~Pks~Kr~iUj67eAy7Xkg1ZX-6ifjFg8LQefpqX9tEa-nBqzO7hR9ClLEirSIgkoDNti5jwYWHPhsc8bNktctRwVRXCNdNwSD~tyvtcQL6dXnUZ~u4zuPC7S~XAs00ZM-8quOsdUwt2mkt2sVVImNaz4IxH-~OdcNIdldwM~jpASAiVSrm8dsL0RB0sr~iDrqzrpYsXXYv2hh5dHsasXx7vpLOXX6OAZ-dbTg2r7IIfGtUNJoSaTa4Ag__",
    githubUrl: null,
    liveUrl: "/email-builds",
  },
];

function ProjectSection() {
  return (
    <div className="project-section">
      <header className="project-header">
        <h2>My Projects</h2>
        <a className="contact-button" href="https://google.com">
          Contact me
        </a>
      </header>

      <section className="projects-container">
        {projects.map((project) => (
          <div key={project.id} className="project">
            {project.liveUrl ? (
              <Link to={project.liveUrl} className="project-link">
                <img
                  src={project.imageUrl || "path/to/default/image.jpg"}
                  alt={project.title}
                  className="project-image"
                />
              </Link>
            ) : (

                <a
                  href={project.githubUrl}
                  onClick={() => console.log("Project clicked!")}
                className='project-link'
                >
                  <img
                    src={project.imageUrl || "path/to/default/image.jpg"}
                    alt={project.title}
                    className="project-image"
                  />
                </a>
            )}
            <h3>{project.title}</h3>
            <div className="skill-container">
              {project.skills.map((skill, index) => (
                <div key={index} className="skill">
                  <p>{skill}</p>
                </div>
              ))}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  className="github-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i>
                </a>
              )}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default ProjectSection;
