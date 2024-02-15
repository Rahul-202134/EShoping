import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';


export default function Cart() {
    // Initialize cart from localStorage during the component's mount
    const initialCart = JSON.parse(localStorage.getItem('cart')) || [];
    const [cart, setCart] = useState(initialCart);

    // Save updated cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const handleIncrease = (productId) => {
        setCart((prevCart) =>
            prevCart.map((product) =>
                product._id === productId
                    ? { ...product, quantity: product.quantity + 1 }
                    : product
            )
        );
    };

    const handleDecrease = (productId) => {
        setCart((prevCart) =>
            prevCart.map((product) =>
                product._id === productId && product.quantity > 1
                    ? { ...product, quantity: product.quantity - 1 }
                    : product
            )
        );
    };

    const handleInputChange = (event, productId) => {
        const newQuantity = Math.max(1, parseInt(event.target.value, 10) || 1);
        setCart((prevCart) =>
            prevCart.map((product) =>
                product._id === productId ? { ...product, quantity: newQuantity } : product
            )
        );
    };

    const handleDelete = (productId) => {
        setCart((prevCart) => prevCart.filter((product) => product._id !== productId));
    };

    const updatePrice = (product) => {
        return product.quantity * product.price;
    };

    const calculateTotal = () => {
        return cart.reduce((total, product) => total + updatePrice(product), 0);
    };
    return (
        <div>
            <Navbar />
            <section className="h-100 h-custom" style={{ background: '#eee' }}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col">
                            <div className="card">
                                <div className="card-body p-4">
                                    <div className="row">
                                        <div className="col-lg-7">
                                            <h5 className="mb-3">
                                                <Link className="text-body">
                                                    <i className="fas fa-long-arrow-alt-left me-2"></i>Continue shopping
                                                </Link>
                                            </h5>
                                            <hr />
                                            <div className="d-flex justify-content-between align-items-center mb-4">
                                                <div>
                                                    <p className="mb-1">Shopping cart</p>
                                                    <p className="mb-0">You have {cart.length} items in your cart</p>
                                                </div>
                                                <div>
                                                    <p className="mb-0">
                                                        <span className="text-muted">Sort by:</span>
                                                        <Link className="text-body">
                                                            price <i className="fas fa-angle-down mt-1"></i>
                                                        </Link>
                                                    </p>
                                                </div>
                                            </div>

                                            {cart.map((selectedProduct) => (
                                                <div className="card mb-3 mb-lg-0" key={selectedProduct._id}>
                                                    <div className="card-body">
                                                        <div className="d-flex justify-content-between">
                                                            <div className="d-flex flex-row align-items-center">
                                                                <div>
                                                                    <img
                                                                        src={selectedProduct.image}
                                                                        className="img-fluid rounded-3"
                                                                        alt={selectedProduct.name}
                                                                        style={{ width: '65px' }}
                                                                    />
                                                                </div>
                                                                <div className="ms-3">
                                                                    <p className="small mb-0">{selectedProduct.title}</p>
                                                                    <p className="small mb-0">Price-{selectedProduct.price}</p>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex flex-row align-items-center">
                                                                <div style={{ width: '50px', display: 'flex' }}>
                                                                    <button className='btn btn-primary' onClick={() => handleDecrease(selectedProduct._id)}>-</button>
                                                                    <input
                                                                        type="number"
                                                                       
                                                                        value={selectedProduct.quantity}
                                                                        onChange={(e) => handleInputChange(e, selectedProduct._id)}
                                                                        style={{ width: '40px', backgroundColor: '#fff', color: 'black' }}
                                                                    />
                                                                    <button className='btn btn-primary' onClick={() => handleIncrease(selectedProduct._id)}>+</button>
                                                                </div>
                                                                <div style={{ width: '80px' }}>
                                                                    <p className="small mb-0"></p>
                                                                </div>
                                                                <div style={{ width: '80px' }}>
                                                                    <p className="small mb-0">{updatePrice(selectedProduct)}</p>
                                                                </div>
                                                                <Link to="" style={{ color: '#cecece' }} onClick={() => handleDelete(selectedProduct._id)}>
                                                                    <FontAwesomeIcon icon={faTrashAlt} />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div class="col-lg-5">

                                            <div class="card bg-primary text-white rounded-3">
                                                <div class="card-body">
                                                    <div class="d-flex justify-content-between align-items-center mb-4">
                                                        <h5 class="mb-0">Card details</h5>
                                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                                                            class="img-fluid rounded-3" style={{ width: '45px' }} alt="Avatar" />
                                                    </div>

                                                    <p class="small mb-2">Card type</p>
                                                    <Link to="" type="submit" class="text-white"><i
                                                        class="fab fa-cc-mastercard fa-2x me-2"></i></Link>
                                                    <Link to="" type="submit" class="text-white"><i
                                                        class="fab fa-cc-visa fa-2x me-2"></i></Link>
                                                    <Link to="" type="submit" class="text-white"><i
                                                        class="fab fa-cc-amex fa-2x me-2"></i></Link>
                                                    <Link to="" type="submit" class="text-white"><i class="fab fa-cc-paypal fa-2x"></i></Link>

                                                    <form class="mt-4">
                                                        <div class="form-outline form-white mb-4">
                                                            <input type="text" id="typeName" class="form-control form-control-lg" siez="17"
                                                                placeholder="Cardholder's Name" />
                                                            <label class="form-label" for="typeName">Cardholder's Name</label>
                                                        </div>

                                                        <div class="form-outline form-white mb-4">
                                                            <input type="text" id="typeText" class="form-control form-control-lg" siez="17"
                                                                placeholder="1234 5678 9012 3457" minlength="19" maxlength="19" />
                                                            <label class="form-label" for="typeText">Card Number</label>
                                                        </div>

                                                        <div class="row mb-4">
                                                            <div class="col-md-6">
                                                                <div class="form-outline form-white">
                                                                    <input type="text" id="typeExp" class="form-control form-control-lg"
                                                                        placeholder="MM/YYYY" size="7" minlength="7" maxlength="7" />
                                                                    <label class="form-label" for="typeExp">Expiration</label>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <div class="form-outline form-white">
                                                                    <input type="password" id="typeText" class="form-control form-control-lg"
                                                                        placeholder="&#9679;&#9679;&#9679;" size="1" minlength="3" maxlength="3" />
                                                                    <label class="form-label" for="typeText">Cvv</label>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </form>

                                                    <hr class="my-4" />

                                                    <div class="d-flex justify-content-between">
                                                        <p class="mb-2">Subtotal</p>
                                                        <p class="mb-2">{calculateTotal()}</p>
                                                    </div>

                                                    <div class="d-flex justify-content-between">
                                                        <p class="mb-2">Shipping</p>
                                                        <p class="mb-2">20.00</p>
                                                    </div>

                                                    <div class="d-flex justify-content-between mb-4">
                                                        <p class="mb-2">Total(Incl. taxes)</p>
                                                        <p class="mb-2">{calculateTotal()+20}</p>
                                                    </div>

                                                    <button type="button" class="btn btn-info btn-block btn-lg">
                                                        <div class="d-flex justify-content-between">
                                                            
                                                            <span>Payment<i class="fas fa-long-arrow-alt-right ms-2"></i></span>
                                                        </div>
                                                    </button>

                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    );
}
