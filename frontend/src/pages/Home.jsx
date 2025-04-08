import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Categories from '../components/Categories';
import RestaurantCard from '../components/RestaurantCard';
import Footer from '../components/Footer';
import { API_PATH } from '../path/apiPath';

function Home() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch(`${API_PATH}/api/restaurants/getresturants`);
        const data = await response.json();
        setRestaurants(data);
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      }
    };

    fetchRestaurants();
  }, []);

  return (
    <section className="relative">
      <Navbar />

      <main
        className="relative h-[50vh] md:h-[50vh] lg:h-[60vh] p-4 bg-cover bg-center flex flex-col justify-center items-center transition-all duration-700 ease-in-out"
        style={{ backgroundImage: `url(/1.jpg)` }}
      >
        <div className="text-center text-4xl sm:text-5xl md:text-6xl text-white font-serif p-4 rounded-lg animate-fade-in-up">
          QuickBite
        </div>

        <div className="bg-[#865f4aa8] w-[90%] md:w-[60%] text-center p-6 rounded-lg mx-auto mt-6 font-serif animate-fade-in-up delay-150">
          <h1 className="text-2xl md:text-3xl font-extrabold text-white">
            "Delicious, delivered with care."
          </h1>
          <p className="text-lg md:text-xl mt-2 text-white">
            Just one click, to fulfill your cravings.
          </p>
        </div>
      </main>

      {/* Category Section */}
      <div className="px-6 sm:px-10 lg:px-16 py-10 animate-fade-in-up delay-200">
        <Categories />
      </div>

      {/* Collections Title */}
      <div className="w-full py-12 px-4 sm:px-6 lg:px-16 bg-gradient-to-r from-[#d8f3dc] via-[#b7e4c7] to-[#95d5b2] animate-fade-in-up delay-300">
        <div className="text-center max-w-7xl mx-auto shadow-xl p-10 rounded-3xl md:backdrop-blur-sm bg-white/70">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1b4332] font-serif tracking-wide">
            🍽️ Collections
          </h2>
          <p className="mt-4 text-[#081c15] text-lg sm:text-xl font-medium">
            Explore the restaurants according to your taste — curated just for you!
          </p>
        </div>
      </div>

      {/* Restaurant Cards */}
      <section className="px-6 py-12 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 animate-fade-in-up delay-400">
        {restaurants.map((restaurant, index) => {
          const imageIndex = (index % 10) + 1;
          const imagePath = `/restaurants/${imageIndex}.jpg`;

          return (
            <div
              key={restaurant._id}
              className="transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <RestaurantCard restaurant={restaurant} image={imagePath} />
            </div>
          );
        })}
      </section>

      <Footer />
    </section>
  );
}

export default Home;
