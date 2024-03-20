import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ContactForm from "../ContactForm/ContactForm";

// import '.../.EmailBuilds/EmailBuilds.scss';

function LiveWebsites() {
  return (
    <div>
      <Header />
      

      {/* First Section */}
      <div className='back-link'>
        <Link to='/'>Back</Link>
      </div>

      <section>
        <h2>Section 1</h2>
        <div className="image-container">
          <img src="/assets/imgs/Client Work/Q1.jpg" alt="Website 1" />
          <img src="/assets/imgs/Client work/Q2.jpg" alt="Website 1" />
          <img src="/assets/imgs/Client work/Q3.jpg" alt="Website 1" />
          <img src="/assets/imgs/Client work/Q4.jpg" alt="Website 1" />
          <img src="/assets/imgs/Client work/Q5.jpg" alt="Website 1" />
          <img src="/assets/imgs/Client work/Q6.jpg" alt="Website 1" />
          <img src="/assets/imgs/Client work/Q7.jpg" alt="Website 1" />
          <img src="/assets/imgs/Client work/Q8.jpg" alt="Website 1" />

        </div>
      </section>

      {/* Second Section */}
      <section>
        <h2>Section 2</h2>
        <div className='image-container'>
        <img src="/assets/imgs/Client work/CB1.png" alt="Website 1" />
          <img src="/assets/imgs/Client work/CB2.png" alt="Website 1" />
          <img src="/assets/imgs/Client work/CB3.png" alt="Website 1" />
          <img src="/assets/imgs/Client work/CB4.png" alt="Website 1" />

        </div>
      </section>

      <ContactForm />
      <Footer />
    </div>
  );
}

export default LiveWebsites;
