import React, { createContext, useState, useEffect } from 'react';
import sample from '../components/Assets/sample'; // Ensure this imports correctly

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    // Initialize cartItems state from localStorage or default to an empty array
    const [cartItems, setCartItems] = useState(() => {
        const storedCart = localStorage.getItem('cartItems');
        return storedCart ? JSON.parse(storedCart) : [];
    });

    // Save cart items to localStorage whenever the cartItems state changes
    useEffect(() => {
        if (cartItems.length > 0) {
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
        } else {
            localStorage.removeItem('cartItems');
        }
    }, [cartItems]);

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
        removeFromCart,
        cartItems,
        cartCount: cartItems.reduce((total, item) => total + item.quantity, 0), // Calculate total items in cart
        getTotalPrice,
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
