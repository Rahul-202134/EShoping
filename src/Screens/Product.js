import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Product() {
  const [pro, setPro] = useState([]);
  const [loading, setLoading] = useState(true);
  //const { category } = useParams(); // Using useParams to get the category from the URL
  const navigate = useNavigate();

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

  useEffect(() => {
    loadData();
  }, []);
  const handleCart = (productId) => {
    if (!localStorage.getItem("authToken")) {
      navigate('/Login')
    }
    else {
      const productToAdd = pro.find((product) => product._id === productId);
      const existingCart = JSON.parse(localStorage.getItem('cart')) || [];

      const isProductInCart = existingCart.some((item) => item._id === productId);

      if (!isProductInCart) {
        const updatedCart = [...existingCart, productToAdd];
        localStorage.setItem('cart', JSON.stringify(updatedCart));
      }
    }
  };
  return (
    <div>
      <div className="row">
        <div className='col-sm-3'>
          <h2 className='mid-com'>Category</h2>
          <div className="slideshow-container sec-B">
            <div className="slides">
            <Link to="/"><h3 className='home'>Home</h3></Link>
              <div className="slide">
                <Link to="/"><p>Male</p></Link>
                <Link to="/"><p>Female</p></Link>
                <Link to="/"><p>Kids</p></Link>
                <Link to="/"><p>Electronics</p></Link>
              </div>
              <div className="slide">
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-9">
          <h2 className="mid-com">Products</h2>
          {loading ? (
            <div>Loading...</div>
          ) : pro.length !== 0 ? (
            <div className="row">
              {pro.map((data) => (
                <div className="col-sm-3" key={data._id}>
                  <div className="card">
                    <div className="card-body img-pro">
                      <h5 style={{ color: '#7300e6' }}>Price:{data?.price}</h5>
                      <img src={data?.image} alt="" />
                      <button
                        className="btn btn-primary btn1-pro"
                        onClick={() => handleCart(data._id)}
                      >
                        Cart
                      </button>
                      <Link to="/" className="btn btn-primary btn2-pro">
                        Buy
                      </Link>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div>No products available</div>
          )}
        </div>
      </div>
    </div>
  );
}