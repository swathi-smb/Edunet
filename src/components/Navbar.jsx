import React, { useState } from 'react';
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="absolute top-4 left-0 w-full z-50"> 
      {/* Navigation Bar */}
      <div className="flex justify-end p-4">
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-lg md:text-xl font-thin text-white">
          <Link to="/Restaurant" className="hover:text-gray-300">Add Restaurant</Link>
          {/* <Link to="/" className="hover:text-gray-300">Home</Link> */}
          <Link to="/login" className="hover:text-gray-300">Login</Link>
          <Link to="/signup" className="hover:text-gray-300">Sign Up</Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white text-3xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="absolute top-16 right-6 bg-black bg-opacity-80 text-white p-4 rounded-lg flex flex-col gap-3">
          <Link to="/" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/login" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>Login</Link>
          <Link to="/signup" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>Sign Up</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
