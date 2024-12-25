import React from "react";
import testimonialImage from "../assets/images/testimonial-image.png";
import "./Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Alice Waters",
      image: testimonialImage,
      text: "What an experience! From the moment I entered Retreat You I felt in peace. Daily yoga, exercises and great diet really helped me to disconnect.",
    },
    {
      id: 2,
      name: "Alice Waters",
      image: testimonialImage,
      text: "What an experience! From the moment I entered Retreat You I felt in peace. Daily yoga, exercises and great diet really helped me to disconnect.",
    },
    {
      id: 3,
      name: "Alice Waters",
      image: testimonialImage,
      text: "What an experience! From the moment I entered Retreat You I felt in peace. Daily yoga, exercises and great diet really helped me to disconnect.",
    },
  ];

  return (
    <div className="testimonials-container">
      <div className="testimonials-header">
        <h2>TESTIMONIALS</h2>
        <div className="navigation-arrows">
          <button className="nav-arrow prev">←</button>
          <button className="nav-arrow next">→</button>
        </div>
      </div>
      <div className="testimonials-wrapper">
        <div className="testimonials-scroll">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="stars">✦ ♦ ✦</div>
              <div className="testimonial-content">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="testimonial-image"
                />
                <h3>{testimonial.name}</h3>
                <p>{testimonial.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
