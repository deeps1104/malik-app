import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import applogo from "../assets/images/applogo.png";
import "./Navbar.css";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const userIconRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation(); // Hook to track current route

  const toggleModal = () => setShowModal(!showModal);

  const handleSignupClick = () => {
    navigate("/signup");
  };

  // Close the modal when the route changes
  useEffect(() => {
    setShowModal(false);
  }, [location.pathname]);

  return (
    <>
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
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/new-arrivals">
                  New Arrivals
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/sale">
                  Sale
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/blog">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div className="navbar-logo mx-auto">
            <Link className="navbar-brand" to="/">
              <img src={applogo} alt="Logo" className="logo-img" />
            </Link>
          </div>

          <div className="search-bar mx-3">
            <div className="search-input-container">
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
          </div>

          <div className="d-flex align-items-center">
            <Link to="/cart" className="mx-3 text-dark">
              <i className="bi bi-bag fs-5"></i>
            </Link>
            <button
              ref={userIconRef}
              className="mx-3 text-dark border-0 bg-transparent"
              onClick={toggleModal}
            >
              <i className="bi bi-person fs-5"></i>
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`custom-modal ${showModal ? "show" : ""}`}
        style={{
          position: "absolute",
          top: userIconRef.current?.getBoundingClientRect().bottom + 10 || 0,
          left: userIconRef.current?.getBoundingClientRect().right - 200 || 0,
          zIndex: 1050,
          backgroundColor: "#FEF8F5",
        }}
      >
        <div className="modal-header">
          <h6 className="modal-title">Welcome</h6>
        </div>
        <div className="modal-body">
          <p style={{ fontSize: "10px" }}>
            To access your account and manage orders
          </p>
        </div>
        <button className="px-2 py-2" onClick={handleSignupClick}>
          Login / Signup
        </button>
      </div>
    </>
  );
};

export default Navbar;
