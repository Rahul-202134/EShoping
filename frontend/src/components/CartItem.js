import React from 'react';
import sample from '../components/Assets/sample';

const CartItem = ({ item, onRemove }) => {
    const { id, quantity } = item; // Destructure item properties

    // Find the product details from the sample
    const product = sample.find(p => p.id === id);

    return (
        <div className="cart-item">
            {product ? (
                <>
                    <h3>{product.title}</h3>
                    <p>Price: ${product.price.toFixed(2)}</p>
                    <p>Quantity: {quantity}</p>
                    <p>Subtotal: ${(product.price * quantity).toFixed(2)}</p>
                    <button onClick={() => onRemove(id)}>Remove</button>
                </>
            ) : (
                <p>Product not found</p>
            )}
        </div>
    );
};

export default CartItem;
