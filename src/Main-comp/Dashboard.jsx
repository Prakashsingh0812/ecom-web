// Dashboard.jsx
import React from 'react';
import Navbar from '../head-foot/Navbar';
import Carousel from '../Homepage-comp/Carouselsec1'; // Correct path to Carousel component
import TopProducts from '../Homepage-comp/Topproductsec2';

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      {/* <TopProducts/> */}
    </div>
  );
};

export default Dashboard;
