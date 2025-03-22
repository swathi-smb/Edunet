import React from 'react';

function Categories() {
  return (
    <section className="p-6">
      {/* <h2 className="text-center text-3xl font-semibold mb-6">Categories</h2> */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        {[
          { img: "breakfast.jpg", name: "Breakfast" },
          { img: "South.jpg", name: "South Indian" },
          { img: "north.jpg", name: "North Indian" },
          { img: "burger.jpg", name: "Burger" },
          { img: "pizza.jpg", name: "Pizza" },
          { img: "biriyani.jpg", name: "Biryani" },
          { img: "chat.jpg", name: "Chats" },
          { img: "dessert.jpg", name: "Desserts" },
        ].map((category, index) => (
          <div key={index} className="flex flex-col items-center p-2  rounded-full hover:scale-105 transition duration-300">
            <img src={category.img} alt={category.name} className="w-40 h-40 object-cover rounded-full" />
            <p className="text-center text-lg font-medium mt-2">{category.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;
