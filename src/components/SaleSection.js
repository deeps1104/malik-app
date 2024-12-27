import React from 'react'
import "./SaleSection.css"
import saleImage from "../assets/images/blazer.png"
const SaleSection = () => {
    return (
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="sale-content">
                <p className="mb-3 sale-detail-content ">BIG SALE</p>
                <h2 className="mb-3 sale-detail-contents">Raise your Style Fashion With

                Upto 50% Off On Our Blazer, Indowestern and Sherwani
                </h2>
                <p className="mb-4 ">Sale Are Ending Soon. Dont Let Them Slip</p>
                <button className="shop-button px-4 py-2">SHOP THE SALES</button>
              </div>
            </div>
            <div className="col-md-6 pt-5">
              <img src={saleImage} className="sale-image img-fluid" alt="Fashion Sale" />
            </div>
          </div>
        </div>
    );
  };

export default SaleSection