import React from 'react';
import './SkillSection.scss';


let skills = [
    { title: 'HTML', description: '3 years' },
    { title: 'CSS/SCSS', description: '3 years' },
    { title: 'Javascript', description: '3 years' },
    { title: 'React', description: '2 years' },
    { title: 'Salesforce', description: '2 years' }
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
