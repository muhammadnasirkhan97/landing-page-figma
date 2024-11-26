import React from 'react';

const Header = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-between px-6 py-4 shadow-md">
      {/* Left: Logo */}
      <div className="text-2xl font-bold">
        Nasir Store
      </div>

      {/* Center: Navigation Links */}
      <div className="flex space-x-8 text-lg">
        <a href="#home" className="hover:text-gray-600">Home</a>
        <a href="#shop" className="hover:text-gray-600">Shop</a>
        <a href="#our-story" className="hover:text-gray-600">Our Story</a>
        <a href="#pages" className="hover:text-gray-600">Pages</a>
      </div>

      {/* Right: Search Icon */}
      <div className="text-xl cursor-pointer">
        🔍
      </div>
    </div>
  );
};

export default Header;
