import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ContactForm from "../ContactForm/ContactForm";
import { Link } from "react-router-dom";

let LiveWebsites = () => {
  let [current, setCurrent] = useState(0);
  let images = [
    "https://i.ibb.co/RTNydQ4/Q1.jpg",
    "https://i.ibb.co/T0kWXQG/Q2.jpg",
    "https://i.ibb.co/gVfMQHF/Q4.jpg",
    "https://i.ibb.co/n75f9SM/Q7.jpg",
    "https://i.ibb.co/znSgmBT/Q8.jpg",
    "https://i.ibb.co/k1sbWty/Q-restaurant-page.jpg",
    "https://i.ibb.co/Mph58Gg/CB.jpg",
    "https://i.ibb.co/dPF5FZZ/CB1.png",
    "https://i.ibb.co/N7y3bhs/CB3.png",
    "https://i.ibb.co/qJQSSMQ/CB4.png",
  ];

  let nextImage = () =>
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  let prevImage = () =>
    setCurrent(current === 0 ? images.length - 1 : current - 1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="live-websites">
      <Header />
      <div className="back-link">
        <Link to="/">Back</Link>
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
      <ContactForm />
      <Footer />
    </div>
  );
};

export default LiveWebsites;
