import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-dark  text-light">
      <div className="container pt-4">
        <div className="row">
          {/* About Section */}
          <div className="col-md-3 mb-4">
            <h5 className="text-uppercase">About Us</h5>
            <p>🅴🆂🅷🅾🅿🅸🅽🅶</p>
            <p>
              We are an e-commerce company committed to delivering the best products to your doorstep.
            </p>
          </div>

          {/* Links Section */}
          <div className="col-md-3 mb-4">
            <h5 className="text-uppercase">Useful Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light text-decoration-none">Home</a></li>
              <li><a href="/shop" className="text-light text-decoration-none">Shop</a></li>
              <li><a href="/contact" className="text-light text-decoration-none">Contact</a></li>
              <li><a href="/faq" className="text-light text-decoration-none">FAQs</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-md-3 mb-4">
            <h5 className="text-uppercase">Contact Us</h5>
            <p><FontAwesomeIcon icon={faEnvelope} /> rahulkumar202134@gmail.com</p>
            <p><FontAwesomeIcon icon={faPhone} /> +91 9536741161</p>
            <div>
              <a href="#" className="text-light me-3"><FontAwesomeIcon icon={faFacebook} /></a>
              <a href="#" className="text-light me-3"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="#" className="text-light"><FontAwesomeIcon icon={faInstagram} /></a>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="col-md-3 mb-4">
            <h5 className="text-uppercase">Newsletter</h5>
            <p>Subscribe to get the latest updates and offers:</p>
            <form>
              <div className="mb-2">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  aria-label="Email"
                />
              </div>
              <button type="submit" className="btn btn-primary btn-sm w-100">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-secondary text-center py-3">
        <p className="mb-0">&copy; 2024 E-Commerce | All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
