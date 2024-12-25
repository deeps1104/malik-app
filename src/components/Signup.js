
import React from "react";
import "./Signup.css";
import sherwani from "../assets/images/sherwani.png";
import thumbprint from "../assets/images/thumbprint.png"; 
import wave from "../assets/images/wave.png"; 

const Signup = () => {
  return (
    <div className="signup-page">
      {/* Background Wave */}
      <img src={wave} alt="wave background" className="background-wave" />

      <div className="container">
        <div className="row align-items-center min-vh-100">
          {/* Form Section */}
          <div className="col-lg-6">
            <div className="form-container">
              <h2 className="form-title">Get Started Now</h2>
              <p className="form-subtitle">Enter your Credentials to Create your account</p>
              <form>
                <div className="mb-3">
                  <label htmlFor="fullName" className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="fullName"
                    placeholder="David John"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="xyz@xyz.com"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    placeholder="Phone Number"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="********"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    placeholder="********"
                  />
                </div>
                <div className="mb-3">
                 
                  <label className="terms-text">
                    By signing up I agree to terms and conditions
                  </label>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Sign Up
                </button>
                <p className="text-center mt-3">
                  Have a account? <a href="#" className="signin-link">Sign In</a>
                </p>
              </form>
            </div>
          </div>

          {/* Image Section */}
          <div className="col-lg-6">
            <div className="image-container">
              <img src={thumbprint} alt="thumbprint background" className="thumbprint-bg" />
              <img src={sherwani} alt="Sherwani" className="model-image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
