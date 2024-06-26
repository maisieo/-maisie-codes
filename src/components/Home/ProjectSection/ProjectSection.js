import React from "react";
import { Link } from "react-router-dom";
import "./ProjectSection.css";

let projects = [
  {
    id: 1,
    title: "This website!",
    skills: ["React", "CSS", "Javascript", 'Node.js'],
    imageUrl: "/assets/imgs/Apps/ThisWebsite.png",
    githubUrl: "https://github.com/maisieo/-maisie-codes",
    liveUrl: "https://github.com/maisieo/-maisie-codes",
  },

  {
    id: 2,
    title: "SuperNet landing page",
    skills: ["React", "CSS", "Node.js", "Javascript"],
    imageUrl: "assets/imgs/Apps/SuperNet2.PNG",
    githubUrl: "https://github.com/maisieo/superNet-landing-page",
    liveUrl: "https://supernet-landing-page.netlify.app/",
  },


  {
    id: 2,
    title: "Live client websites",
    skills: ["HTML", "CSS", "Javascript", "LWC"],
    imageUrl: "assets/imgs/Client work/Q-restaurant-page.JPG",
    githubUrl: null,
    liveUrl: "/live-client-websites",
  },

  {
    id: 4,
    title: "Email Builds",
    skills: ["React", "Node.js"],
    imageUrl:
      "assets/imgs/Emails/Email3.jpg",
    githubUrl: null,
    liveUrl: "/email-builds",
  },
  {
    id: 1,
    title: "Calculator app",
    skills: ["HTML", "CSS", "JavaScript"],
    imageUrl: "/assets/imgs/Apps/Calculator.jpg",
    githubUrl: "https://github.com/maisieo/calculator-app/",
    liveUrl: "https://calculator-app-maisie.netlify.app/",
  }
];

function ProjectSection() {
  return (
    <div className="project-section">
      <header className="project-header">
        <h2>Projects</h2>
        <a className="contact-button" href="#contact-section">
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
