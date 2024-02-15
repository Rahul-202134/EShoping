import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Product from '../Screens/Product';
import { Carousel } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom'; // Import useLocation
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import h1 from './h1.jpg';
import h2 from './h2.jpg';
import h3 from './h3.jpg';


export default function Home() {
  const [pro, setPro] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();
  const location = useLocation(); // useLocation hook

  useEffect(() => {
    loadData();
    if (location.state && location.state.userData) {
      const userData = location.state.userData;
      setUserData(userData);
      console.log('User data from login:', userData);
    }
  }, [location.state]); // Add location.state as a dependency

  const loadData = async () => {
    try {
      let response = await fetch('http://localhost:5000/api/productData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      response = await response.json();
      setPro(response[0]);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  const handleCart = (productId) => {
    const productToAdd = pro.find((product) => product._id === productId);
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    const isProductInCart = existingCart.some((item) => item._id === productId);
    if (!isProductInCart) {
      const updatedCart = [...existingCart, productToAdd];
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
    navigate('/');
  };

  return (
    <div>
      <Navbar userData={userData} />
      <Carousel>
        <Carousel.Item>
          <div className="image-container">
            <img className="home-img" src={h1} alt="" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="image-container">
            <img className="home-img" src={h2} alt="" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="image-container">
            <img className="home-img" src={h3} alt="" />
          </div>
        </Carousel.Item>
      </Carousel>
      <Product/>
      <Footer />
    </div>
  );
}
