import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import { API_PATH } from '../path/apiPath';

function Collection() {
  const { restaurantId } = useParams();
  const [dishes, setDishes] = useState([]);
  const [restaurantName, setRestaurantName] = useState('');

  useEffect(() => {
    const fetchDishes = async () => {
      try {
        const res = await fetch(`${API_PATH}/api/restaurants/${restaurantId}/dishes`);
        const data = await res.json();
        setDishes(data.dishes);
        setRestaurantName(data.restaurantName);
      } catch (err) {
        console.error("Error fetching dishes:", err);
      }
    };

    fetchDishes();
  }, [restaurantId]);

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gradient-to-r from-[#e3d5ca] to-[#90a955] px-4 sm:px-6 lg:px-12 py-10 animate-fade-in">
      {/* Title Section */}
      <div className="text-center mb-10 ">
        <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-[#03045e] bg-clip-text text-transparent">
          {restaurantName ? restaurantName : 'Loading...'}
        </h1>
        <div className="mt-2 w-24 h-1 bg-gray-800 mx-auto rounded animate-pulse"></div>
        <p className="text-gray-500 mt-2 text-sm sm:text-base">
          Discover the best of <span className="font-semibold">{restaurantName}</span>’s dishes below.
        </p>
      </div>

      {/* Dishes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {dishes.map((dish) => (
          <div
            key={dish._id}
            className="bg-white shadow-lg rounded-xl p-4 transform transition duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in-up"
          >
            <img
              src={dish.image?.replace(/\\/g, "/") || 'default-dish.jpg'}
              alt={dish.name}
              className="w-full h-48 object-cover rounded-lg mb-3"
            />


            <h2 className="text-xl font-bold text-gray-800">{dish.name}</h2>
            <p className="text-gray-600 text-sm mt-1 line-clamp-2">{dish.description}</p>
            <p className="text-lg font-semibold text-green-600 mt-2">₹{dish.price}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
  
}

export default Collection;
