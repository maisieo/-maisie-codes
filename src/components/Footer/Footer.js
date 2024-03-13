import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-wrapper">
        <p className="name">Maisie O'Brien-Butcher </p>

        <div className="social-icons">
          {/* Social Icons */}
          <a
            href="https://github.com/maisieo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://linkedin.com/in/maisie-obb"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:maisieobb@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
