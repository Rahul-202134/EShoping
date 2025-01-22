import React from 'react'
import offers from '../components/Assets/offers.png'
const Offers = () => {
    return (
        <div className='offers'>
            <div className="offers-left">
                <h1>Exclusive Offer</h1>
                <h3 style={{color:'red'}}>Offers For You</h3>
                <p>Only On Best Seller Product</p>
                <button className='offers-btn'>Check Now</button>
            </div>
            <div className="offers-right">
                <img src={offers} alt="" />
            </div>
        </div>
    )
}

export default Offers
