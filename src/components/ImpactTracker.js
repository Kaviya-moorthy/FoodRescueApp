
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './ImpactTracker.css';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

function ImpactTracker() {
  const location = useLocation();
  const [foodPosts, setFoodPosts] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [familiesHelped, setFamiliesHelped] = useState(0);
  const [foodWasteReduced, setFoodWasteReduced] = useState(0);
  const [chartData, setChartData] = useState([]);

  const loadData = () => {
    const storedPosts = JSON.parse(localStorage.getItem('foodPosts')) || [];
    setFoodPosts(storedPosts);

    const quantity = storedPosts.reduce((sum, post) => sum + parseInt(post.quantity || 0), 0);
    setTotalQuantity(quantity);
    setFamiliesHelped(storedPosts.length);
    setFoodWasteReduced(quantity * 0.5);

    const dataMap = {};
    storedPosts.forEach(post => {
      const date = new Date(post.expirationDate).toLocaleDateString();
      if (!dataMap[date]) {
        dataMap[date] = { date, quantity: 0 };
      }
      dataMap[date].quantity += parseInt(post.quantity || 0);
    });

    setChartData(Object.values(dataMap));
  };

  useEffect(() => {
    loadData();
  }, [location]); // Reloads data every time location changes

  return (
    <div className="impact-tracker-container">
      <h2>Impact Tracker</h2>
      <div className="impact-stats">
        <div className="impact-card">
          <h3>Total Food Items Posted</h3>
          <p>{foodPosts.length}</p>
        </div>
        <div className="impact-card">
          <h3>Families Helped</h3>
          <p>{familiesHelped}</p>
        </div>
        <div className="impact-card">
          <h3>Total Quantity Saved</h3>
          <p>{totalQuantity} units</p>
        </div>
        <div className="impact-card">
          <h3>Food Waste Reduced</h3>
          <p>{foodWasteReduced} kg</p>
        </div>
      </div>

      <h3>Donations Over Time</h3>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="quantity" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}


import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './ImpactTracker.css';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

function ImpactTracker() {
  const location = useLocation();
  const [foodPosts, setFoodPosts] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [familiesHelped, setFamiliesHelped] = useState(0);
  const [foodWasteReduced, setFoodWasteReduced] = useState(0);
  const [chartData, setChartData] = useState([]);

  const loadData = () => {
    const storedPosts = JSON.parse(localStorage.getItem('foodPosts')) || [];
    setFoodPosts(storedPosts);

    const quantity = storedPosts.reduce((sum, post) => sum + parseInt(post.quantity || 0), 0);
    setTotalQuantity(quantity);
    setFamiliesHelped(storedPosts.length);
    setFoodWasteReduced(quantity * 0.5);

    const dataMap = {};
    storedPosts.forEach(post => {
      const date = new Date(post.expirationDate).toLocaleDateString();
      if (!dataMap[date]) {
        dataMap[date] = { date, quantity: 0 };
      }
      dataMap[date].quantity += parseInt(post.quantity || 0);
    });

    setChartData(Object.values(dataMap));
  };

  useEffect(() => {
    loadData();
  }, [location]); // Reloads data every time location changes

  return (
    <div className="impact-tracker-container">
      <h2>Impact Tracker</h2>
      <div className="impact-stats">
        <div className="impact-card">
          <h3>Total Food Items Posted</h3>
          <p>{foodPosts.length}</p>
        </div>
        <div className="impact-card">
          <h3>Families Helped</h3>
          <p>{familiesHelped}</p>
        </div>
        <div className="impact-card">
          <h3>Total Quantity Saved</h3>
          <p>{totalQuantity} units</p>
        </div>
        <div className="impact-card">
          <h3>Food Waste Reduced</h3>
          <p>{foodWasteReduced} kg</p>
        </div>
      </div>

      <h3>Donations Over Time</h3>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="quantity" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
 f9a0e835b508d29c4d07ae06a2718abeead5a8f0
export default ImpactTracker;