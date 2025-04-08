import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Add from "../components/ui/Add";
import Input from "../components/ui/File";
import Logout from "../components/ui/Logout";
import { API_PATH } from "../path/apiPath";

function Restaurant() {
    const [dishes, setDishes] = useState([]);
    const [newDish, setNewDish] = useState({
        name: "",
        description: "",
        price: "",
        image: "",
    });
    const [imageFile, setImageFile] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchDishes = async () => {
            const vendorToken = sessionStorage.getItem("vendorToken");
            if (!vendorToken) return;

            try {
                const response = await fetch(`${API_PATH}/api/restaurants/dishes`, {
                    method: "GET",
                    headers: { "Authorization": `Bearer ${vendorToken}` }
                });
                const data = await response.json();
                setDishes(data);
                console.log("data:", data)
            } catch (error) {
                console.error("Error fetching dishes:", error);
            }
        };
        fetchDishes();
    }, []);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        setImageFile(file);
    };

    const handleAddDish = async (e) => {
        e.preventDefault();

        if (!imageFile) {
            alert("Please upload an image");
            return;
        }

        const formData = new FormData();
        formData.append("image", imageFile);
        formData.append("name", newDish.name);
        formData.append("description", newDish.description);
        formData.append("price", newDish.price);

        try {
            const response = await fetch(`${API_PATH}/api/restaurants/dishes`, {
                method: "POST",
                headers: { Authorization: `Bearer ${sessionStorage.getItem("vendorToken")}` },
                body: formData,
            });

            if (!response.ok) throw new Error("Failed to add dish.");

            const addedDish = await response.json();
            setDishes([...dishes, addedDish.dish]);

            alert("Dish added successfully!");
            setNewDish({ name: "", description: "", price: "", image: "" });
            setImageFile(null);
        } catch (error) {
            console.error("Error adding dish:", error);
            alert("An error occurred while adding the dish.");
        }
    };

    //logout function
    const handleLogout = () => {
        sessionStorage.removeItem("vendorToken");
        navigate("/Rlogin"); // Or whatever your login route is
    };


    const handleDeleteDish = async (id) => {
        try {
            const response = await fetch(`${API_PATH}/api/restaurants/dishes/${id}`, {
                method: "DELETE",
                headers: { "Authorization": `Bearer ${sessionStorage.getItem("vendorToken")}` },
            });

            if (response.ok) {
                setDishes(dishes.filter(dish => dish._id !== id));
                alert("Dish deleted successfully!");
            } else {
                alert("Failed to delete dish.");
            }
        } catch (error) {
            console.error("Error deleting dish:", error);
            alert("An error occurred while deleting the dish.");
        }
    };

    return (
        <>
            <Navbar />
            <main className="flex flex-col items-center justify-start min-h-screen pt-24 bg-gradient-to-br from-[#f1faee] to-[#1b4332] px-4 sm:px-6 md:py-12">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-[#1d3557] font-serif mb-10 animate-fade-in-down tracking-wide">
                    Vendor Dashboard
                </h1>

                {/* Dish Form */}
                <div className="w-full max-w-2xl bg-white/70 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-[#e0e0e0] animate-fade-in-up transition-all">
                    <h2 className="text-2xl font-bold text-[#457b9d] text-center mb-6 border-b border-gray-300 pb-2">
                        🍽️ Add New Dish
                    </h2>

                    <form onSubmit={handleAddDish} className="space-y-5">
                        <input
                            type="text"
                            placeholder="Dish Name"
                            value={newDish.name}
                            onChange={(e) => setNewDish({ ...newDish, name: e.target.value })}
                            required
                            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-[#1d3557] transition"
                        />
                        <textarea
                            placeholder="Description"
                            value={newDish.description}
                            onChange={(e) => setNewDish({ ...newDish, description: e.target.value })}
                            required
                            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-[#1d3557] transition"
                        />
                        <input
                            type="number"
                            placeholder="Price"
                            value={newDish.price}
                            onChange={(e) => setNewDish({ ...newDish, price: e.target.value })}
                            required
                            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-[#1d3557] transition"
                        />
                        <Input
                            label="Upload Image"
                            onChange={handleImageUpload}
                            accept="image/*"
                            required
                            className="w-full p-3 border rounded-xl bg-white"
                        />
                        <div className="flex justify-between items-center gap-4">
                            <Add
                                type="submit"
                                onClick={handleAddDish}
                                className="w-full bg-[#1d3557] hover:bg-[#16324e] text-white py-2 rounded-xl font-semibold shadow-md"
                            >
                                ➕ Add Dish
                            </Add>
                            <Logout onClick={handleLogout} />
                        </div>
                    </form>
                </div>

                {/* Dishes Section */}
                <h2 className="text-3xl sm:text-4xl font-bold mt-12 mb-8 text-[#1d3557] animate-fade-in-up">
                    📜 Your Dishes
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl animate-fade-in-up">
                    {dishes.map((dish, index) => (
                        <div
                            key={dish._id || index}
                            className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition transform hover:scale-105 p-4 flex flex-col items-center text-center"
                        >
                            <div className="w-full h-48 rounded-xl overflow-hidden mb-4">
                                <img
                                    src={dish.image}
                                    alt={dish.name}
                                    className="w-full h-full object-cover transition duration-300 hover:scale-105"
                                />
                            </div>
                            <h3 className="text-lg font-bold text-[#1d3557]">{dish.name}</h3>
                            <p className="text-sm text-gray-700 mt-1">{dish.description}</p>
                            <p className="text-[#e63946] font-semibold mt-2">${dish.price}</p>
                            <button
                                onClick={() => handleDeleteDish(dish._id)}
                                className="mt-4 bg-red-500 hover:bg-red-600 text-white py-1 px-4 rounded-lg transition duration-300"
                            >
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
            </main>

            <Footer />
        </>
    );
}

export default Restaurant;
