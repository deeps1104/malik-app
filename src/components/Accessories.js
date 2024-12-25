import React from "react";
import "./Accessories.css";
import lofers from "../assets/images/lofers.png";
import bow from "../assets/images/bow-tie.png";
import safa from "../assets/images/safa.png";

const Accessories = () => {
  const items = [
    { id: 1, name: "Lofers", image: lofers },
    { id: 2, name: "Bow/Tie", image: bow },
    { id: 3, name: "Safa", image: safa },
  ];

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="mb-4 position-relative">ACCESSORIES</h2>
        <div className="row g-4">
          {items.map((item) => (
            <div key={item.id} className="col-md-4">
              <div className="card border-0">
                <div className="card-img-wrapper">
                  <img
                    src={item.image}
                    className="card-img-top"
                    alt={item.name}
                  />
                  <div className="item-name-overlay">
                    <span>{item.name}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accessories;
