import React, { createContext, useState } from 'react';
import sample from '../components/Assets/sample'; // Ensure this imports correctly

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState([]); // State for cart items

    const addToCart = (productId) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find(item => item.id === productId);
            if (existingItem) {
                return prevItems.map(item =>
                    item.id === productId
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                const newItem = { id: productId, quantity: 1 };
                return [...prevItems, newItem];
            }
        });
    };

    const removeFromCart = (productId) => {
        setCartItems((prevItems) => {
            return prevItems.filter(item => item.id !== productId);
        });
    };

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => {
            const product = sample.find(p => p.id === item.id); // Find product details
            return total + (product ? product.price * item.quantity : 0);
        }, 0);
    };

    const contextValue = {
        sample,
        addToCart,
        cartItems,
        cartCount: cartItems.reduce((total, item) => total + item.quantity, 0) // Calculate total items in cart
    };


    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
