import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import sample from '../components/Assets/sample';


const Cart = () => {
    const { cartItems, removeFromCart, sample } = useContext(ShopContext);

    // Calculate total price
    const totalPrice = cartItems.reduce((total, item) => {
        const product = sample.find(p => p.id === item.id);
        return total + (product ? product.price * item.quantity : 0);
    }, 0);

    return (
        <div className="cart">
            <h1>Your Cart</h1>
            <div className="cart-container">
                <div className="cart-items">
                    {cartItems.length === 0 ? (
                        <p>Your cart is empty</p>
                    ) : (
                        cartItems.map(item => {
                            const product = sample.find(p => p.id === item.id);
                            return (
                                <div key={item.id} className="cart-item">
                                    <img src={product.image} alt={product.title} />
                                    <div>
                                        <h2>{product.title}</h2>
                                        <p>Quantity: {item.quantity}</p>
                                        <p>Price: ${product.price}</p>
                                        <button onClick={() => removeFromCart(item.id)} className="remove-button">Remove</button>
                                    </div>
                                </div>
                            );
                        })
                    )}
                </div>
                <div className="order-summary">
                    <h2>Order Summary</h2>
                    <p>Total Price: ${totalPrice.toFixed(2)}</p>
                    <button className="checkout-button">Proceed to Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
