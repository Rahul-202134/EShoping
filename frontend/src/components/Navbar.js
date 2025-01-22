import React, { useState,useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { ShopContext } from '../Context/ShopContext';
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
    <div className='fixed-nav'>
      <nav className="navbar navbar-expand-lg navbar-light bg-success">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            🅴🆂🅷🅾🅿🅸🅽🅶
          </Link>
          {userData ? (
            <span>Welcome {userData.name}</span>
          ) : (
            <span>Guest</span>
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

            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/shop" className="nav-link" aria-current="page">
                  Shop
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/men" className="nav-link" aria-current="page">
                  Men
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/women" className="nav-link" aria-current="page">
                  Women
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/electronics" className="nav-link" aria-current="page">
                  Electronics
                </Link>
              </li>
            </ul>
            <ul className='navbar-nav ms-auto'>
              <li className="nav-item">
                {localStorage.getItem("authToken") ? (
                  <>

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
              <Link to="/cart" style={{ marginLeft: '20px' }}>
                <FontAwesomeIcon className="cart-icon" icon={faShoppingCart} />
                <div className='cart_icon_count'>{cartCount}</div> {/* Display cart count */}
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
