// src/components/Cart.js
import React from 'react';
import './Cart.css';
import { useCart } from '../Context/CartContext';

function Cart() {
  const { cartItems } = useCart();

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty-message">Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div className="cart-card" key={index}>
              <h3>{item.foodName}</h3>
              <p><strong>Quantity:</strong> {item.quantity}</p>
              <p><strong>Expires on:</strong> {item.expirationDate}</p>
              <p><strong>Contact:</strong> {item.contactInfo}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
