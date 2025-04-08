import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { API_PATH } from '../path/apiPath';
import { Link } from "react-router-dom";

function Rlogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            // Replace with your actual API call to authenticate the vendor
            const response = await fetch(`${API_PATH}/api/vendors/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            
            // If login is successful
            if (response.ok) {
                const { token } = data; // Assuming the API returns a token
                sessionStorage.setItem("vendorToken", token); // Store token in localStorage
                sessionStorage.removeItem("VendorToken",token);
                // alert("Login Successful!");
                navigate("/restaurant"); // Redirect to the vendor dashboard
            } else {
                alert(data.message || "Invalid Credentials");
            }
        } catch (error) {
            console.error("Login failed:", error);
            alert("An error occurred. Please try again.");
        }
    };

    return (
        <>
            <Navbar />
            <main className="relative flex items-center justify-center min-h-screen bg-cover bg-center mb-2" style={{ backgroundImage: "url('./bg4.jpg')" }}>
                <div className="min-h-screen flex items-center justify-center">
                    <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-lg">
                        <h2 className="text-2xl font-bold text-center">Vendor Login</h2>
                        <div className="mt-4">
                            <label>Email:</label>
                            <input
                                type="email"
                                className="w-full px-3 py-2 border rounded"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mt-4">
                            <label>Password:</label>
                            <input
                                type="password"
                                className="w-full px-3 py-2 border rounded"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="w-full bg-[#ffb703] text-white hover:bg-[#f28f3b] transition py-2 rounded mt-4">
                            Login
                        </button>
                        <p className="mt-4 text-center text-gray-600">
                            Don't have an account? <Link to="/Rsignup" className="text-[#f7b81b] hover:underline">Sign Up</Link>
                        </p>
                    </form>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Rlogin;
