import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [vendorLoggedIn, setVendorLoggedIn] = useState(false);

  useEffect(() => {
    // Check if vendor is logged in
    const vendorToken = sessionStorage.getItem("vendorToken");
    setVendorLoggedIn(!!vendorToken);
  }, []);

  const handleAddRestaurantClick = () => {
      navigate("/Rlogin"); // Redirect to vendor login if not logged in
  };

  return (
    <nav className="absolute top-4 left-0 w-full z-50"> 
      <div className="flex justify-end p-4">
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-lg md:text-xl font-thin text-white">
          <button onClick={handleAddRestaurantClick} className="hover:text-gray-300">
            Add Restaurant
          </button>
          <Link to="/" className="hover:text-gray-300">Home</Link>
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
          <button onClick={handleAddRestaurantClick} className="hover:text-gray-300">Add Restaurant</button>
          <Link to="/" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/login" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>Login</Link>
          <Link to="/signup" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>Sign Up</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
