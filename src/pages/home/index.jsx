import React from 'react';
import './car.css';
import Navbar from '../../components/navbar';

const CarCarousel = () => {
 

  return (
    <>
    <Navbar/>
    <div className="relative car-container">
      {/* Overlay for content */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-4">
        {/* Trusted label */}
        <div className="bg-gray-900 text-white text-sm rounded-full px-4 py-2 mb-4">
          <i className="fas fa-check-circle"></i> 100% Trusted car rental platform in India
        </div>

        {/* Main Heading */}
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-2">Find Your Best</h1>

        {/* Subheading */}
        <h2 className="text-green-400 text-5xl md:text-6xl font-bold">Dream Car for Rental</h2>
      </div>
    </div>

    </>
    
  );
};

export default CarCarousel;
