import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full px-6 py-4 bg-zinc-900 flex justify-between items-center bg-white shadow-md fixed top-0 z-50">
      <div className="text-2xl font-extrabold text-yellow-500">CodeGenAI</div>
      <div className="space-x-4">
        <button className="px-4 py-2 font-medium text-gray-500 hover:text-yellow-600">Login</button>
        <button className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-gray-700">Get Started</button>
      </div>
    </nav>
  );
};

export default Navbar;