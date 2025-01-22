import React from 'react';
import Arrow from '../components/Assets/arrow.png';

const Breadcrum = (props) => {
    const { product } = props;

    // Check if the product is defined and has the expected properties
    if (!product) {
        return <div className="breadcrum">No product found</div>; // Handle case where product is not defined
    }

    return (
        <div className="breadcrum">
            Home <img src={Arrow} alt="" /> Shop <img src={Arrow} alt="" /> 
            {product.category ? product.category : 'No Category'} <img src={Arrow} alt="" />
            {product.title ? product.title : 'Unknown Product'}
        </div>
    );
}

export default Breadcrum;
