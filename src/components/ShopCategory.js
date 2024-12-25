import React from "react";
import "./ShopCategory.css";
import sherwani from "../assets/images/sherwani.png";

  const ShopCategory =() => {
  const categories = [
    { name: "Sherwani", image: sherwani },
    { name: "Sherwani", image: sherwani },
    { name: "Sherwani", image: sherwani },
    { name: "Sherwani", image: sherwani },
    { name: "Sherwani", image: sherwani },
    { name: "Sherwani", image: sherwani },
  ];

  return (
    <section className="shop-by-category">
      <div className="container">
        <h3 className="mb-4 shop-category">
      SHOP BY CATEGORY
        </h3>
        <div className="row">
          {categories.map((category, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="card shadow-sm">
                <img
                  src={category.image}
                  alt={category.name}
                  className="card-img-top"
                />
               <div className="card-body">
  <div className="text-content">
    <h5 className="card-title">{category.name}</h5>
    <p className="card-text text-muted">Explore Now!</p>
  </div>
  <span>→</span>
</div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ShopCategory;
