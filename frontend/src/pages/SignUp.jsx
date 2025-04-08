import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { API_PATH } from '../path/apiPath';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage('');
    setErrorMessage('');

    if (password !== confirmPassword) {
      setErrorMessage('❌ Passwords do not match!');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch(`${API_PATH}/api/users/register`, { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
      });

      const data = await response.json();
      
      if (response.ok) {
        setSuccessMessage('✅ Successfully signed up! Redirecting to login...');
        setTimeout(() => navigate('/login'), 2000);
      } else {
        setErrorMessage(`❌ ${data.message || 'Signup failed!'}`);
      }
    } catch (error) {
      console.log(error)
      setErrorMessage('❌ Error connecting to server. Please try again later.');
    }
  };

  return (
    <>
      <Navbar />
      <main className="relative flex items-center justify-center min-h-screen bg-cover bg-center mb-2"
        style={{ backgroundImage: "url('./bg4.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-4xl font-serif text-center text-gray-800">Welcome!</h2>
          <p className='flex justify-center font-light'>Sign up and explore the delicious food now</p>

          {/* Success & Error Messages */}
          {successMessage && <div className="mt-4 text-green-600 font-semibold text-center">{successMessage}</div>}
          {errorMessage && <div className="mt-4 text-red-600 font-semibold text-center">{errorMessage}</div>}

          <form onSubmit={handleSubmit} className="mt-6">
            <div className="mb-4">
              <label className="block text-gray-700">Full Name:</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} required 
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email:</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required 
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password:</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required 
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Confirm Password:</label>
              <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required 
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <button type="submit" disabled={isSubmitting} className="w-full bg-[#ffb703] text-white py-2 rounded-lg hover:bg-[#f28f3b] transition">
              Sign Up
            </button>
          </form>

          <p className="mt-4 text-center text-gray-600"> 
            {isSubmitting && <span>Submitting...</span>}
            Already have an account? <a href="/login" className="text-[#f7b81b] hover:underline">Login</a>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default SignUp;
