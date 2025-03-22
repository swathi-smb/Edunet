import React from 'react';
import Navbar from '../components/Navbar';
import Categories from '../components/Categories';
import Restaurant from '../components/Restaurant';

function Home() {
  return (
    <section className="relative">
      <Navbar />

      <main
        className="relative h-[50vh] md:h-[50vh] lg:h-[60vh] p-4 bg-cover bg-center flex flex-col justify-center items-center"
        style={{ backgroundImage: `url(/1.jpg)` }}
      >
        <div className="text-center text-6xl md:text-6xl text-white font-serif p-4 rounded-lg">
          QuickBite
        </div>

        {/* Text */}
        <div className="bg-[#865f4aa8] w-[90%] md:w-[60%] text-center p-6 rounded-lg mx-auto mt-6 font-serif">
          <h1 className="text-2xl md:text-3xl font-extrabold text-white">
            "Delicious, delivered with care."
          </h1>
          <p className="text-lg md:text-xl mt-2 text-white">
            Just one click, to fulfill your cravings.
          </p>
        </div>        
      </main>
      {/* Section of Categories */}
      <div className='p-6 m-4'><Categories/></div>
      
      {/* Restaurant */}
      <div> <Restaurant/></div>
    </section>
  );
}

export default Home;
