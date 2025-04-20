const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Sample in-memory storage for food posts
let foodPosts = [
  {
    foodName: 'Rice',
    quantity: '10',
    expirationDate: '2025-04-20',
    contactInfo: '1234567890',
  },
  {
    foodName: 'Bread',
    quantity: '5',
    expirationDate: '2025-04-18',
    contactInfo: '9876543210',
  }
];

// GET all food posts (to fetch the food posts from the backend)
app.get('/api/food-posts', (req, res) => {
  res.json(foodPosts);
});

// POST a new food post (to add a new food post to the backend)
app.post('/api/food-posts', (req, res) => {
  const newPost = req.body;
  foodPosts.push(newPost); // Add the new post to the foodPosts array
  res.status(201).json({ message: 'Food post added successfully' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
