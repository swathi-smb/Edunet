import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
 
const [UserLoggedIn,setUserLoggedIn] = useState('false')
  useEffect(() => {
    // Check if user is logged in
    const userToken = sessionStorage.getItem("token");
    setUserLoggedIn(!userToken);
  }, []);

  
    //logout function
    const handleLogout = () => {
        sessionStorage.removeItem("userToken");
        navigate("/"); // Or whatever your login route is
    };

  return (
    <nav className="absolute top-4 left-0 w-full z-50 "> 
      <div className="flex justify-end p-4">
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-lg md:text-xl font-thin text-black">
          
          <Link to="/" className="hover:text-gray-500 text-black font-bold">Home</Link>
          <button onClick={handleLogout} className="hover:text-red-800 font-bold text-red-400">
            Logout
          </button>
          
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
          <button onClick={handleLogout} className="hover:text-gray-300 text-red-800">
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
