import React, { useState } from 'react';
import './PostFoodForm.css';

function PostFoodForm() {
  const [formData, setFormData] = useState({
    foodName: '',
    quantity: '',
    expirationDate: '',
    contactInfo: ''
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send the data to the backend
    try {
      const response = await fetch('http://localhost:5000/api/food-posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Food post submitted successfully!');
        setFormData({
          foodName: '',
          quantity: '',
          expirationDate: '',
          contactInfo: ''
        });
      } else {
        alert('Failed to submit food post');
      }
    } catch (error) {
      console.error('Error submitting food post:', error);
      alert('Server error while posting food');
    }
  };

  return (
    <div className="post-food-form-container">
      <h2>Post Food</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="foodName"
          value={formData.foodName}
          onChange={handleChange}
          placeholder="Food Name"
          required
        />
        <input
          type="number"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          placeholder="Quantity"
          required
        />
        <input
          type="date"
          name="expirationDate"
          value={formData.expirationDate}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="contactInfo"
          value={formData.contactInfo}
          onChange={handleChange}
          placeholder="Contact Info"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default PostFoodForm;
