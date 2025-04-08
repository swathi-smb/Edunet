import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { API_PATH } from '../path/apiPath';

function RSignup() {
  const [restaurant_name, setName] = useState("");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
  
    // Ensure passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
  
    try {
      const response = await fetch(`${API_PATH}/api/vendors/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          restaurant_name,
          email,
          password
        })
      });
  
      const data = await response.json();
  
      if (response.ok) {
        // Store token or relevant data
        sessionStorage.setItem("token", data.token);  // Assume backend returns a token
        sessionStorage.setItem("vendorEmail", email);
  
        alert("Signup successful! Please login.");
        navigate("/Rlogin");
      } else {
        alert(data.message || "Signup failed. Please try again.");
      }
    } catch (error) {
      console.error("Error signing up:", error);
      alert("Something went wrong. Please try again later.");
    }
  };
  

  return (
    <>
      <Navbar />
      <main 
        className="flex flex-col items-center justify-center min-h-[120vh] bg-cover bg-center px-4 sm:px-6 md:px-8"
        style={{ backgroundImage: "url('./bg4.jpg')" }}
      >
        <div className="flex justify-center items-center w-full">
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg w-full max-w-lg">
            <h2 className="text-3xl md:text-4xl font-serif text-center">Vendor Signup</h2>
            <p className="text-center font-serif text-gray-600">Sign up to manage your restaurant</p>

            <form onSubmit={handleSignup} className="mt-4">
              {/* Restaurant Name */}
              <label className="block text-gray-600 font-semibold mb-2 mt-4">Restaurant Name</label>
              <input 
                type="text" 
                value={restaurant_name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Restaurant Name" 
                required 
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />

              {/* Email */}
              <label className="block text-gray-600 font-semibold mb-2 mt-4">Email</label>
              <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Email" 
                required 
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />

              {/* Password */}
              <label className="block text-gray-600 font-semibold mb-2 mt-4">Password</label>
              <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Password" 
                required 
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />

              {/* Confirm Password */}
              <label className="block text-gray-600 font-semibold mb-2 mt-4">Confirm Password</label>
              <input 
                type="password" 
                value={confirmPassword} 
                onChange={(e) => setConfirmPassword(e.target.value)} 
                placeholder="Confirm Password" 
                required 
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />

              {/* Signup Button */}
              <button 
                type="submit" 
                className="w-full bg-[#ffb703] text-white p-2 rounded mt-6 hover:bg-[#f28f3b] transition duration-300"
              >
                Sign Up
              </button>
            </form>

            {/* Login Redirect */}
            <p className="text-center mt-3 text-gray-700">
              Already have an account? 
              <a href="/Rlogin" className="text-blue-500 hover:underline ml-1">Login</a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default RSignup;
