import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"; // Social Icons

function Footer() {
    const [email, setEmail] = useState('');

    // Handle Subscription
    const handleSubscribe = () => {
        if (email.trim() === '') {
            alert("Please enter a valid email.");
            return;
        }
        alert(`Thank you for subscribing: ${email}`);
        setEmail(""); // Clear input after subscription
    };

    return (
        <div className="bg-[#0d1b2a] text-white w-full py-10 px-6 md:px-16 lg:px-28">
            {/* Footer Main Section */}
            <footer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-6">
                {/* Newsletter Section */}
                <div>
                    <h1 className="text-2xl font-semibold">Newsletter</h1>
                    <p className="mt-4 text-gray-300">Subscribe to our newsletter for the latest updates</p>
                    <div className="mt-5 flex flex-col sm:flex-row gap-3">
                        {/* Email Input */}
                        <input 
                            type="email" 
                            placeholder="Enter your email" 
                            className="p-2 w-full sm:w-2/3 bg-gray-900 border-2 border-[#c1a362] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#c1a362]" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {/* Subscribe Button */}
                        <button 
                            className="p-2 w-full sm:w-auto bg-transparent text-[#c1a362] border-2 border-[#c1a362] rounded-lg font-semibold hover:bg-[#c1a362] hover:text-black transition"
                            onClick={handleSubscribe}
                        >
                            Subscribe
                        </button>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h1 className="text-2xl font-semibold">Quick Links</h1>
                    <ul className="mt-4 space-y-2 text-gray-300">
                        {["Privacy Policy", "Terms of Service", "Contact Us"].map((link, index) => (
                            <li key={index} className="hover:underline hover:underline-offset-2 cursor-pointer">
                                {link}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h1 className="text-2xl font-semibold">Follow Us</h1>
                    <div className="mt-4 flex gap-5 text-2xl">
                        <FaFacebook className="hover:text-blue-500 cursor-pointer transition" />
                        <FaInstagram className="hover:text-pink-500 cursor-pointer transition" />
                        <FaTwitter className="hover:text-blue-400 cursor-pointer transition" />
                    </div>
                </div>
            </footer>

            {/* Separator Line */}
            <hr className="border-t border-gray-600 my-6" />

            {/* Copyright Section */}
            <div className="flex flex-col md:flex-row justify-center md:justify-between text-center text-gray-400">
                <p className="mb-2 md:mb-0">© 2025 Quick Bite Food Delivery. All rights reserved.</p>
                <p>Made with ❤️ to help you fulfill the cravings</p>
            </div>
        </div>
    );
}

export default Footer;
