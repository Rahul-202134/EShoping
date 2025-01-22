import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { ShopContext } from "../Context/ShopContext";

export default function Navbar({ userData }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { cartCount } = useContext(ShopContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-success">
      <div className="container">
        {/* Brand Logo */}
        <Link to="/" className="navbar-brand text-white">
          🅴🆂🅷🅾🅿🅸🅽🅶
        </Link>

        {/* Welcome Message */}
        <span className="text-white">
          {userData ? `Welcome, ${userData.name}` : "Guest"}
        </span>

        {/* Toggle Button for Mobile */}
        <button
          className="navbar-toggler"
          onClick={toggleMenu}
          type="button"
          aria-controls="navbarNav"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link text-white">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/shop" className="nav-link text-white">
                Shop
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/men" className="nav-link text-white">
                Men
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/women" className="nav-link text-white">
                Women
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/electronics" className="nav-link text-white">
                Electronics
              </Link>
            </li>
          </ul>

          {/* Right Section: Login/Logout and Cart */}
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              {localStorage.getItem("authToken") ? (
                <button className="btn btn-outline-light" onClick={handleLogout}>
                  Logout
                </button>
              ) : (
                <Link className="btn btn-outline-light" to="/login">
                  Login
                </Link>
              )}
            </li>
            <li className="nav-item ms-3">
              <Link to="/cart" className="text-white position-relative">
                <FontAwesomeIcon icon={faShoppingCart} size="lg" />
                {cartCount > 0 && (
                  <span
                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                  >
                    {cartCount}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
