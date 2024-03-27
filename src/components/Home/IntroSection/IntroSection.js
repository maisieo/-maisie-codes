import React from 'react';
import './IntroSection.css';

function IntroSection() {
  return (
    <section className="intro-section">
      <div className="text-content">
        <h1 className="header-text">Hi, I'm <span className="underline">Maisie!</span><br />
        A frontend developer</h1>
        <p className="sub-heading">Based in the UK, I'm a front-end developer with solid experience building pixel-perfect and responsive UI elements, applications and websites. Drop me a line if you think I can be of help!</p>
        <a className="contact-button" href='google.com'>Get in touch</a>
      </div>
      <div className="profile-img">
       <img src="/assets/imgs/Me.png" border="0"/>
      </div>
      
    </section>
  );
}

export default IntroSection;
