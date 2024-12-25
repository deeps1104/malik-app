import React, { useState } from 'react';
import "./Footer.css"

function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <div className="subscription-container min-vh-50 d-flex align-items-center justify-content-center">
      <div className="container-fluid container-md px-3">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6 text-center">
            <div className="subscription-content py-4 py-md-5">
              <h2 className="subscription-title  mb-2 mb-md-3">
                JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO
              </h2>
              <p className="subscription-text mb-3 mb-md-4 text-white">
                Type your email down below and be young wild generation
              </p>
              
              <form onSubmit={handleSubmit} className="subscription-form">
                <div className="input-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Add your email here"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button
                    className="btn btn-dark px-3 px-md-4"
                    type="submit"
                  >
                    SEND
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
