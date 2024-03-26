import React, { useState } from "react";
import "./LiveWebsites.css";

let LiveWebsites = () => {
  let [current, setCurrent] = useState(0);
  let images = [
    "public\assets\imgs\Client work\Q1.JPG",
    "/assets/imgs/Client work/CB.jpg",
    "/assets/imgs/Client work/CB2.png",
    "/assets/imgs/Client work/CB3.png",
    "/assets/imgs/Client work/CB4.png",
    "assets/imgs/Client work/Q-restaurant-page.JPG",
    "https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  let nextImage = () =>
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  let prevImage = () =>
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  let jumpImage = (index) => setCurrent(index);

  return (
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
      <div className="gallery-footer">
        {images.map((_, index) => (
          <div
            key={index}
            className={`bubble-outer ${index === current ? "active" : ""}`}
            onClick={() => jumpImage(index)}
          >
            <div className="bubble-inner" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveWebsites;
