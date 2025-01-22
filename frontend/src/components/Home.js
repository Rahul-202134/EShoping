import React, { useEffect, useState } from 'react';
import Popular from '../components/Popular';
import Offers from '../components/Offers';
import { Carousel } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import h1 from './Assets/h1.jpg';
import h2 from './Assets/h2.jpg';
import h3 from './Assets/h3.jpg';


export default function Home() {
  return (
    <div>
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
      <Popular/>
      <Offers/>
    </div>
  );
}
