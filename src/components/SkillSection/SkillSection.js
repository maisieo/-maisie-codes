import React from 'react';
import './SkillSection.scss';


let skills = [
    { title: 'HMTL', description: '3 years' },
    { title: 'CSS', description: 'D3 years' },

]
function SkillSection() {
  return (
    <section className="skill-section">
      {skills.map((skill, index) => (
        <div key={index} className={skill}>
          <h1>{skill.title}</h1>
          <p>{skill.description}</p>
        </div>
      ))}
    </section>
  );
}

export default SkillSection;
