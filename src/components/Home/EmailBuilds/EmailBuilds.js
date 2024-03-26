import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ContactForm from "../ContactForm/ContactForm";
import { Link } from "react-router-dom";

import './EmailBuilds.css';


let EmailBuilds = () => {
  let [current, setCurrent] = useState(0);
  let images = [
  "https://i.ibb.co/r6zx1yb/Email1.jpg",
  "https://i.ibb.co/RBQMN8h/Email2.jpg",
  "https://i.ibb.co/rM41z76/Email3.jpg",
  "https://i.ibb.co/Cmxsc97/Email4.jpg"
  ];

  let nextImage = () =>
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  let prevImage = () =>
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  let jumpImage = (index) => setCurrent(index);

  return (
    <div>
    <Header />
      <div className='back-link'>
        <Link to='/'>Back</Link>
      </div>
    <div className="gallery-container">
      <span className="button-prev" onClick={prevImage}>
        chevron_left
      </span>
      <span className="button-next" onClick={nextImage}>
        chevron_right
      </span>
      <div className="gallery-track">
        {images.map((image, index) => (
          <div
            key={index}
            className="slide-image"
            style={{
              backgroundImage: `url(${image})`,
              transform: `translateX(${(index - current) * 100}%)`,
            }}
          />
        ))}
      </div>
    </div>
    <ContactForm/>
    <Footer/>
    </div>
  );
};


export default EmailBuilds;


