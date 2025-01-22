import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2 className="footer-title">About Us</h2>
          <p>🅴🆂🅷🅾🅿🅸🅽🅶</p>
          <p>
            We are an e-commerce company committed to delivering the best products to your doorstep.
          </p>
        </div>
        <div className="footer-section links">
          <h2 className="footer-title">Useful Links</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/faq">FAQs</a></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h2 className="footer-title">Contact Us</h2>
          <p><FontAwesomeIcon icon={faEnvelope} /> rahulkumar202134@gmail.com</p>
          <p><FontAwesomeIcon icon={faPhone} /> +91 9536741161</p>
          <div className="social-icons">
            <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 E-Commerce | All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
