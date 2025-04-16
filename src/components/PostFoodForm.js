import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PostFoodForm.css';

function PostFoodForm() {
  const [foodName, setFoodName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const foodData = { foodName, quantity, expirationDate, contactInfo };

    // Retrieve existing data from localStorage
    const existingFoodItems = JSON.parse(localStorage.getItem('foodItems')) || [];

    // Add the new food item
    const updatedFoodItems = [...existingFoodItems, foodData];

    // Save back to localStorage
    localStorage.setItem('foodItems', JSON.stringify(updatedFoodItems));

    console.log('Food Posted:', foodData);

    // Reset form fields
    setFoodName('');
    setQuantity('');
    setExpirationDate('');
    setContactInfo('');

    // Navigate to the food list page after submission
    navigate('/food-list');
  };

  return (
    <div className="post-food-form-container">
      <h2>Post Food</h2>
      <form onSubmit={handleSubmit} className="post-food-form">
        <div className="form-group">
          <label htmlFor="foodName">Food Name</label>
          <input
            type="text"
            id="foodName"
            placeholder="Enter the name of the food"
            value={foodName}
            onChange={(e) => setFoodName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="quantity">Quantity</label>
          <input
            type="number"
            id="quantity"
            placeholder="Enter quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="expirationDate">Expiration Date</label>
          <input
            type="date"
            id="expirationDate"
            value={expirationDate}
            onChange={(e) => setExpirationDate(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="contactInfo">Contact Info</label>
          <input
            type="text"
            id="contactInfo"
            placeholder="Enter your contact information"
            value={contactInfo}
            onChange={(e) => setContactInfo(e.target.value)}
            required
          />
        </div>

        <button type="submit">Post Food</button>
      </form>
    </div>
  );
}

export default PostFoodForm;
