import React from "react";
import formalWearImage from "../assets/images/formalWear.png";
import "./CenterSection.css";
const CenterSection = () => {
  return (
    <div className="formal-wear-container">
      <div className="content-section">
        <p className="description-text">
           simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.
        </p>
        <p className="description-text">
           simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.
        </p>
        <button className="learn-more-btn">Learn More</button>
      </div>

      {/* Image Section */}
      <div className="image-section">
        <img
          src={formalWearImage}
          alt="Formal Wear Model"
          className="formal-wear-image"
        />
      </div>
    </div>
  );
};

export default CenterSection;
