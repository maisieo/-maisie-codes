import React from 'react';
import './IntroSection.scss';

function IntroSection() {
  return (
    <section className="intro-section">
      <div className="text-content">
        <h1 className="header-text">I'm <span className="underline">Maisie!</span><br />
        A Frontend Developer</h1>
        <p className="sub-heading">FE developer with experience building pixel-perfect front ends with Javascript libraries such as React, LWC, and with other technologies and languages like HTML, CSS, Figma, Litmus.</p>
        <a className="contact-button" href='google.com'>Get in touch</a>
      </div>
      <div className="profile-img">
       
        <img src="path.jpg" alt="Maisie O'Brien-Butcher" />
      </div>
    </section>
  );
}

export default IntroSection;
