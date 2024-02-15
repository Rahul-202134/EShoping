// Navbar.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export default function Navbar({userData}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-success">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            🅴🆂🅷🅾🅿🅸🅽🅶
          </Link>
          {userData ? (
          <span>Welcome {userData.name}</span>
          ):(
            <span>Welcome Guest</span>
          )}
          <button
            className="navbar-toggler"
            onClick={toggleMenu}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
            <ul className="navbar-nav"></ul>

            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/product" className="nav-link" aria-current="page">
                  Products
                </Link>
              </li>
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-primary" type="submit">
                  Search
                </button>
              </form>
              <li className="nav-item">
                {localStorage.getItem("authToken") ? (
                  <>
                    <Link to="/cart">
                      <FontAwesomeIcon className="cart-icon" icon={faShoppingCart} />
                    </Link>
                    <button className='btn btn-primary' onClick={handleLogout}>
                      Logout
                    </button>
                  </>
                ) : (
                  <Link className="btn btn-primary" to="/login">
                    Login
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
