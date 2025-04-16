import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import PostFoodForm from './components/PostFoodForm';
import FoodList from './components/FoodList';
import ImpactTracker from './components/ImpactTracker';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} /> {/* Redirect to /login by default */}
        <Route path="/login" element={<Login />} />           {/* Login route */}
        <Route path="/home" element={<Home />} />             {/* Home route */}
        <Route path="/post-food-form" element={<PostFoodForm />} />
        <Route path="/food-list" element={<FoodList />} />
        <Route path="/impact-tracker" element={<ImpactTracker />} />
        
        
        
        
        
      </Routes>
    </Router>
  );
}

export default App;
