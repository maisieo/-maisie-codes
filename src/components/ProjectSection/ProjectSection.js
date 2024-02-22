import React from 'react';
import './ProjectSection.scss';


let projects = [
    { 
        id: 1,
        title: 'Project 1',
        skills: ['HTML', 'CSS', 'JavaScript'],
        imageUrl: 'path/to/project1/image.jpg',
        githubUrl: 'https://github.com/project1'
    },
    {
        id: 2,
        title: 'Email Builds',
        skills: ['React', 'Node.js'],
        imageUrl: 'path/to/project2/image.jpg',
        githubUrl: 'https://github.com/emailbuilds'
    },
];

function ProjectSection() {
  return (
    <div className="project-section">
      <header className="project-header">
        <h2>My Projects</h2>
        <a className="contact-button" href='https://google.com'>Contact me</a>
      </header>

      <section className="projects-container">
        {projects.map((project) => (
          <div key={project.id} className='project'>
            <a href="#" onClick={() => console.log('Project clicked!')}>
              <img src={project.imageUrl || 'path/to/default/image.jpg'} alt={project.title} className="project-image" />
            </a>
            <h3>{project.title}</h3>
            <p>
              <a href={project.githubUrl} className="github-link" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-github"></i>
              </a>
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default ProjectSection;
