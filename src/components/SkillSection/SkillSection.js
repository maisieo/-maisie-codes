import React from 'react';
import './SkillSection.scss';


let skills = [
    { title: 'HTML', description: '3 years' },
    { title: 'CSS', description: '3 years' },
    { title: 'Adobe XD', description: 'Experience' },
    { title: 'Figma', description: 'Experience' },
    { title: 'Email Builds', description: 'Experience' },
    { title: 'React', description: 'Experience' },
    { title: 'Salesforce', description: 'Experience' }
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
