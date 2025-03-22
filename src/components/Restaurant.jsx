import React from 'react';

function Restaurant() {
    return (
        <section className="px-6 md:px-12 py-10 bg-gray-100">
            {/* Heading Section */}
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 mb-4 text-center md:text-left">
                Collections
            </h2> 
            <p className="font-light text-lg text-gray-700 text-center md:text-left mb-8">
                Explore curated lists of top Restaurants and Cafe based on your mood 🍽️
            </p>

            {/* Grid for Restaurant Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {[
                    { img: "masalahut.jpg", name: "Masala Hut" },
                    { img: "Ruchi.jpg", name: "Ruchi's Family Restaurant" },
                    { img: "suru.jpg", name: "Suru Cafe and Restaurant" },
                    { img: "mutha.jpg", name: "Mutha's Kitchen" },
                ].map((restaurant, index) => (
                    <div 
                        key={index} 
                        className="flex flex-col items-center p-6 bg-gradient-to-br from-white to-gray-50 shadow-lg rounded-xl 
                                   hover:scale-105 hover:rotate-1 transition-transform duration-300 cursor-pointer"
                    >
                        <img 
                            src={restaurant.img} 
                            alt={restaurant.name} 
                            className="w-full h-44 object-cover shadow-md"
                        />
                        <p className="text-center text-lg font-semibold mt-4 text-gray-800">
                            {restaurant.name}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Restaurant;
