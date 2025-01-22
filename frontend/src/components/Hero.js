import React from 'react'
import { Carousel } from 'react-bootstrap';
import h1 from './Assets/h1.jpg';
import h2 from './Assets/h2.jpg';
import h3 from './Assets/h3.jpg';

function Hero() {
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
        </div>
    )
}

export default Hero
