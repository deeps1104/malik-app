import React from "react";
import "./HeroSection.css";
import fashionModelImage from "../assets/images/ModelImage.png";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="container-fluid">
        <div className="row align-items-center min-vh-75">
          <div className="col-md-6 position-relative">
            <img
              src={fashionModelImage}
              alt="Fashion Model"
              className="hero-image img-fluid"
            />
            <span className="hero-star-1"></span>
            <span className="hero-star-2"></span>
          </div>
          <div className="col-md-6 py-5 px-4">
            <div className="hero-content">
              <h3 className="hero-title mb-4">
                FIND CLOTHES THAT MATCHES YOUR STYLE
              </h3>
              <p className="hero-text mb-4">
                Browse through our diverse range of meticulously crafted
                garments, designed to bring out your individuality and cater to
                your sense of style.
              </p>
              <button className="shop-now-btn">Shop Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
