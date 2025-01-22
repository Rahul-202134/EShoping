import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import starIcon from "../components/Assets/star-icon.svg";
import starIconBold from "../components/Assets/star-icon-bold.svg";

function ProductDisplay(props) {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);

    return (
        <div className="container my-4">
            <div className="row">
                {/* Left Section: Image Gallery */}
                <div className="col-lg-6 col-md-6 mb-4">
                    <div className="d-flex flex-column align-items-center">
                        <div className="mb-3 d-flex justify-content-center">
                            <img
                                className="img-thumbnail me-2"
                                src={product.image}
                                alt="Product Thumbnail"
                                style={{ width: "60px", height: "60px", objectFit: "cover" }}
                            />
                            <img
                                className="img-thumbnail me-2"
                                src={product.image}
                                alt="Product Thumbnail"
                                style={{ width: "60px", height: "60px", objectFit: "cover" }}
                            />
                            <img
                                className="img-thumbnail me-2"
                                src={product.image}
                                alt="Product Thumbnail"
                                style={{ width: "60px", height: "60px" }}
                            />
                            <img
                                className="img-thumbnail"
                                src={product.image}
                                alt="Product Thumbnail"
                                style={{ width: "60px", height: "60px" }}
                            />
                        </div>
                        <img
                            className="img-fluid rounded shadow"
                            src={product.image}
                            alt="Product Main"
                            style={{ maxWidth: "400px" }}
                        />
                    </div>
                </div>

                {/* Right Section: Product Details */}
                <div className="col-lg-6 col-md-6">
                    <h1 className="mb-3">{product.title}</h1>

                    {/* Star Ratings */}
                    <div className="d-flex align-items-center mb-3">
                        <img
                            className="me-1"
                            src={starIconBold}
                            alt="Star"
                            style={{ width: "20px" }}
                        />
                        <img
                            className="me-1"
                            src={starIconBold}
                            alt="Star"
                            style={{ width: "20px" }}
                        />
                        <img
                            className="me-1"
                            src={starIconBold}
                            alt="Star"
                            style={{ width: "20px" }}
                        />
                        <img
                            className="me-1"
                            src={starIconBold}
                            alt="Star"
                            style={{ width: "20px" }}
                        />
                        <img
                            className="me-2"
                            src={starIcon}
                            alt="Star"
                            style={{ width: "20px" }}
                        />
                        <p className="mb-0">(122)</p>
                    </div>

                    {/* Price */}
                    <h4 className="text-success mb-3">Price: ${product.price}</h4>

                    {/* Description */}
                    <p>
                        <strong>Description:</strong> {product.description}
                    </p>

                    {/* Size Selection */}
                    <div className="mb-4">
                        <h5>Select Size</h5>
                        <div className="d-flex">
                            {["S", "M", "L", "XL", "XXL"].map((size) => (
                                <div
                                    key={size}
                                    className="border rounded px-3 py-2 me-2 text-center"
                                    style={{ cursor: "pointer" }}
                                >
                                    {size}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Add to Cart Button */}
                    <button
                        onClick={() => addToCart(product.id)}
                        className="btn btn-primary mb-3"
                    >
                        Add To Cart
                    </button>

                    {/* Category and Tags */}
                    <p>
                        <strong>Category:</strong> {product.category}
                    </p>
                    <p>
                        <strong>Tags:</strong> New
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ProductDisplay;
