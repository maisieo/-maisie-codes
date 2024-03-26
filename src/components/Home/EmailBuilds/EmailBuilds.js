import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ContactForm from "../ContactForm/ContactForm";
import { Link } from "react-router-dom";

import './EmailBuilds.css';

function EmailBuilds() {
  return (
    <div>
      <Header />
      <div className='back-link'>
        <Link to='/'>Back</Link>
      </div>
      {/* First Section */}
      <section>
        <h2>Section 1</h2>
        <div className="image-container">
          <img src="/assets/imgs/Emails/Email1.jpg" alt="Website 1" />
          <img src="/assets/imgs/Emails/Email2.jpg" alt="Website 1" />
          <img src="/assets/imgs/Emails/Email3.jpg" alt="Website 1" />
          <img src="/assets/imgs/Emails/Email4.jpg" alt="Website 1" />

        </div>
      </section>
      <ContactForm />
      <Footer />
    </div>
  );
}

export default EmailBuilds;
