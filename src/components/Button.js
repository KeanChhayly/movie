import React from "react";

const Button = ({ children }) => {
  return (
    <button className="font-bold rounded w-64 text-xl text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-2 text-gray-900 hover:text-gray-200">
      {children}
    </button>
  );
};

export default Button;
