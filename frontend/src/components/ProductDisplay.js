import React, { useContext } from 'react'; // Import useContext
import { ShopContext } from '../Context/ShopContext'; // Import ShopContext
import starIcon from '../components/Assets/star-icon.svg';
import starIconBold from '../components/Assets/star-icon-bold.svg';

function ProductDisplay(props) {
    const { product } = props;
    const { addToCart } = useContext(ShopContext); // Accessing addToCart from context

    return (
        <div>
            <div className="productDisplay">
                <div className="productDisplay-left">
                    <div className="productDisplay-img-list">
                        <img src={product.image} alt="" />
                        <img src={product.image} alt="" />
                        <img src={product.image} alt="" />
                        <img src={product.image} alt="" />
                    </div>
                    <div className="productDisplay-img">
                        <img className="productDisplay-main-img" src={product.image} alt="" />
                    </div>
                </div>
                <div className="productDisplay-right">
                    <h1>{product.title}</h1>
                    <div className="productDisplay-right-star">
                        <img style={{ width: '20px' }} src={starIconBold} alt="" />
                        <img style={{ width: '20px' }} src={starIconBold} alt="" />
                        <img style={{ width: '20px' }} src={starIconBold} alt="" />
                        <img style={{ width: '20px' }} src={starIconBold} alt="" />
                        <img style={{ width: '20px' }} src={starIcon} alt="" />
                        <p>(122)</p>
                    </div>
                    <div className="productDisplay-right-price">
                        <div className="productDisplay-right-price">
                            Price: ${product.price}
                        </div>
                    </div>
                    <div className="productDisplay-right-description">
                        <span>Description:</span> {product.description}
                    </div>
                    <div className="productDisplay-right-size">
                        <h3>Select Size</h3>
                        <div className="productDisplay-right-sizes">
                            <div>S</div>
                            <div>M</div>
                            <div>L</div>
                            <div>XL</div>
                            <div>XXL</div>
                        </div>
                    </div>
                    <button onClick={() => addToCart(product.id)} className='productDisplay-right-button'>Add To Cart</button>
                    <p className="productDisplay-right-category">
                        <span>Category:</span> {product.category} {/* Corrected to use product.category */}
                    </p>
                    <p className="productDisplay-right-category">
                        <span>Tags:</span> New
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ProductDisplay;
