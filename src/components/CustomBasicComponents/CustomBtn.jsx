// components/CustomButton.js
import React from 'react';
const CustomButton = ({ icon: Icon, text, onClick, className = '' }) => {
  return (
    <button
    onClick={onClick}
    className="flex items-center mt-4 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition duration-300 shadow-lg transform hover:scale-105"
  style={{backgroundColor: '#403301'}}
  >
    {Icon && <Icon className="mr-2 text-lg" />}
    {text}
  </button>
  );
};

export default CustomButton;
