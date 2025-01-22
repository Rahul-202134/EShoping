import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";

const Cart = () => {
  const { cartItems, removeFromCart, sample } = useContext(ShopContext);

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => {
    const product = sample.find((p) => p.id === item.id);
    return total + (product ? product.price * item.quantity : 0);
  }, 0);

  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">Your Cart</h1>

      <div className="row">
        {/* Cart Items Section */}
        <div className="col-lg-8 mb-4">
          <div className="card p-3 shadow">
            <h2 className="mb-3">Cart Items</h2>
            {cartItems.length === 0 ? (
              <p className="text-muted">Your cart is empty</p>
            ) : (
              cartItems.map((item) => {
                const product = sample.find((p) => p.id === item.id);
                return (
                  <div
                    key={item.id}
                    className="d-flex align-items-center border-bottom pb-3 mb-3"
                  >
                    <img
                      src={product.image}
                      alt={product.title}
                      className="img-thumbnail me-3"
                      style={{ width: "80px", height: "80px", objectFit: "cover" }}
                    />
                    <div className="flex-grow-1">
                      <h5 className="mb-1">{product.title}</h5>
                      <p className="mb-1">Quantity: {item.quantity}</p>
                      <p className="mb-1">Price: ${product.price}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="btn btn-danger btn-sm"
                    >
                      Remove
                    </button>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Order Summary Section */}
        <div className="col-lg-4">
          <div className="card p-3 shadow">
            <h2 className="mb-3">Order Summary</h2>
            <p className="mb-3">
              <strong>Total Price:</strong> ${totalPrice.toFixed(2)}
            </p>
            <button className="btn btn-primary w-100">Proceed to Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
