import React from 'react';
import './SkillSection.css';


let skills = [
    { title: 'HTML', description: 'Experience: over 3 years' },
    { title: 'CSS/SASS', description: 'Experience: over 3 years' },
    { title: 'Javascript', description: 'Experience: over 3 years' },
    { title: 'React', description: 'Experience: 2 years' },
    { title: 'Salesforce', description: 'Experience: 2 years' },
    { title: 'Agile', description: 'Experience: 2 years' }
];

function SkillSection() {
  return (
    <section className="skill-section">

      {skills.map((skill, index) => (
        <div key={index} className='skill'>
          <h1>{skill.title}</h1>
          <p>{skill.description}</p>
        </div>
      ))}
    </section>
  );
}

export default SkillSection;
