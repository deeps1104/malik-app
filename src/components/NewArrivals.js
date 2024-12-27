import React from "react";
import "./NewArrivals.css";
import image1 from "../assets/images/mensArrival1.png";
import image2 from "../assets/images/mensArrival2.png";
import image3 from "../assets/images/mensArrival3.png";

const NewArrivals = () => {
  const arrivals = [
    {
      name: "Cape Blazers For Man",
      image: image1,
      originalPrice: "Rs.7000",
      discountedPrice: "Rs.5000",
    },
    {
      name: "Cape Blazers For Man",
      image: image2,
      originalPrice: "Rs.7000",
      discountedPrice: "Rs.5000",
    },
    {
      image: image3,
    },
    {
      image: image3,
    },
  ];

  return (
    <section className="new-arrivals-section">
      <div className="container py-3">
        <div className="section-title">
          <p className="text-center passage-section">
            passages of Lorem Ipsum available, but the majority
          </p>
          <h2 className="mb-1">NEW ARRIVALS</h2>
        </div>
        <div className="row g-4">
          {arrivals.map((product, index) => (
            <div key={index} className="col-12 col-sm-12 col-lg-3">
              <div className="product-card">
                <div className="product-image-wrapper">
                  <img
                    src={product.image}
                    alt={product.name || "New Arrival Product"}
                    className="product-image"
                  />
                </div>
                {product.name && (
                  <div className="product-details">
                    <h3 className="product-title">{product.name}</h3>
                    <div className="product-price">
                      <span className="original-price">
                        {product.originalPrice}
                      </span>
                      <span className="discounted-price">
                        {product.discountedPrice}
                      </span>
                    </div>
                    <button className="add-cart-btn">ADD CART</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
