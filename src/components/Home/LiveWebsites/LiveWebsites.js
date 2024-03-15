import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ContactForm from "../ContactForm/ContactForm";

import './LiveWebsites.scss';

function LiveWebsites() {
  return (
    <div>
      <Header />

      {/* First Section */}
      <section>
        <h2>Section 1</h2>
        <div className="image-container">
          <img src="/assets/imgs/Q1.jpg" alt="Website 1" />
          <img src="/assets/imgs/Q2.jpg" alt="Website 1" />
          <img src="/assets/imgs/Q3.jpg" alt="Website 1" />
          <img src="/assets/imgs/Q4.jpg" alt="Website 1" />
          <img src="/assets/imgs/Q5.jpg" alt="Website 1" />
          <img src="/assets/imgs/Q6.jpg" alt="Website 1" />
          <img src="/assets/imgs/Q7.jpg" alt="Website 1" />
          <img src="/assets/imgs/Q8.jpg" alt="Website 1" />

        </div>
      </section>

      {/* Second Section */}
      <section>
        <h2>Section 2</h2>
        <div className='image-container'>
        <img src="/assets/imgs/CB1.png" alt="Website 1" />
          <img src="/assets/imgs/CB2.png" alt="Website 1" />
          <img src="/assets/imgs/CB3.png" alt="Website 1" />
          <img src="/assets/imgs/CB3.png" alt="Website 1" />
          <img src="/assets/imgs/CB4.png" alt="Website 1" />

        </div>
      </section>

      <ContactForm />
      <Footer />
    </div>
  );
}

export default LiveWebsites;
