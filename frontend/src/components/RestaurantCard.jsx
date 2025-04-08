import React from 'react';
import { useNavigate } from 'react-router-dom';

function RestaurantCard({ restaurant, image }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/collection/${restaurant._id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform"
    >
      <img
        src={image}
        alt={restaurant.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold">{restaurant.name}</h2>
        <p className="text-gray-600">{restaurant.description}</p>
      </div>
    </div>
  );
}

export default RestaurantCard;
