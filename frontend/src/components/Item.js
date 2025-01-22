import React from 'react';
import { Link } from 'react-router-dom';

const Item = (props) => {
  return (
    <div className="item-container">
      <div className="item-img">
        <Link to={`/product/${props.id}`}><img src={props.image} alt={props.title} /></Link>
      </div>
      <div className="item-details">
        <h2 className="item-name">{props.title}</h2>
        <div className="item-prices">
          <span className="item-price">${props.price}</span>
        </div>
      </div>
    </div>
  );
};

export default Item;
