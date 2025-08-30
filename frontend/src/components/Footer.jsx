import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        {/* Left */}
        <div>
          <h2 className="text-2xl font-bold text-white">GenAI Builder</h2>
          <p className="mt-2 text-sm text-gray-400 max-w-xs">
            Build & launch websites with AI — instantly.
          </p>
        </div>

        {/* Links */}
       <div><h2>Created By Zaahid Khan</h2></div>
      </div>

      {/* Bottom */}
      <div className="mt-10 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} GenAI Builder. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;