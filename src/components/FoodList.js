import React, { useEffect, useState } from 'react';
import './FoodList.css';

function FoodList() {
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    // Get food items from localStorage
    const storedFood = JSON.parse(localStorage.getItem('foodItems')) || [];
    setFoodItems(storedFood);
  }, []);

  return (
    <div className="food-list-container">
      <h2>Available Food Items</h2>
      {foodItems.length === 0 ? (
        <p>No food items posted yet.</p>
      ) : (
        <ul className="food-list">
          {foodItems.map((food, index) => (
            <li key={index} className="food-card">
              <h3>{food.foodName}</h3>
              <p><strong>Quantity:</strong> {food.quantity}</p>
              <p><strong>Expiration Date:</strong> {food.expirationDate}</p>
              <p><strong>Contact Info:</strong> {food.contactInfo}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FoodList;