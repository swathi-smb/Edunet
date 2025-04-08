import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For redirection
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { API_PATH } from '../path/apiPath';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // React Router for navigation

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_PATH}/api/users/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }
      else navigate('/dashboard');

      // Save token & role in sessionStorage
      sessionStorage.setItem('token', data.token);
      

    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main Section */}
      <main
        className="relative flex items-center justify-center min-h-screen bg-cover bg-center mb-2"
        style={{ backgroundImage: "url('./bg4.jpg')" }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Login Box */}
        <div className="relative z-10 bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-4xl font-serif text-center text-gray-800">Welcome Back!</h2>
          <p className="flex font-light justify-center">
            Login to access your dashboard
          </p>

          {/* Error Message */}
          {errorMessage && (
            <p className="text-red-600 text-center font-semibold mb-4">{errorMessage}</p>
          )}

          <form onSubmit={handleSubmit} className="mt-6">
            <div className="mb-4">
              <label className="block text-gray-700">Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#ffb703] text-white py-2 rounded-lg hover:bg-[#f28f3b] transition"
            >
              Login
            </button>
          </form>
          <p className="mt-4 text-center text-gray-600">
            Don't have an account?{' '}
            <a href="/signup" className="text-[#f7b81b] hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Login;
