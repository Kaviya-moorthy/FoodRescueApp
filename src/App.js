// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import PostFoodForm from './components/PostFoodForm';
import FoodList from './components/FoodList';
import ImpactTracker from './components/ImpactTracker';
import { CartProvider } from './Context/CartContext'; // ✅ Import CartProvider

function App() {
  return (
    <CartProvider> {/* Wrap the app in CartProvider */}
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/post-food-form" element={<PostFoodForm />} />
          <Route path="/food-list" element={<FoodList />} />
          <Route path="/impact-tracker" element={<ImpactTracker />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
