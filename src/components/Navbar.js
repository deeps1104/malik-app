import { useNavigate } from "react-router-dom";
import React from "react";
import applogo from "../assets/images/applogo.png";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const handleSignupClick = () => {
    navigate("/signup"); 
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item ">
              <a className="nav-link active" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                New Arrivals
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Sale
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Blog
              </a>
            </li>
          </ul>
        </div>

        <div className="navbar-logo">
          <a className="navbar-brand" href="#">
            <img src={applogo} alt="Logo" className="logo-img" />
          </a>
        </div>

        <div className="search-bar mx-3">
          <input
            type="search"
            className="navbar-search-input"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="search-btn">
            <i className="bi bi-search"></i>
          </button>
        </div>
        <div className="d-flex align-items-center">
          <a href="#" className="mx-3 text-dark">
            <i className="bi bi-bag fs-5"></i>
          </a>
          <button
            onClick={handleSignupClick}
            className="mx-3 text-dark border-0 bg-transparent"
            style={{ cursor: "pointer" }}
          >
            <i className="bi bi-person fs-5"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
