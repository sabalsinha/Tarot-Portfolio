// src/components/Home.jsx
import React from "react";
import heroImage from "../assets/hero.jpg"; // Adjust the path as necessary

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-4">
      <img
        src={heroImage}
        alt="Niishhi Tarot Reader"
        className="w-40 h-40 rounded-full border-4 border-pink-400 shadow-lg mb-4"
      />
      <h1 className="text-4xl md:text-5xl font-bold text-pink-400">
        Hi, I’m Niishhi 🌙
      </h1>
      <p className="mt-4 text-lg max-w-xl">
        Tarot Reader 🔮 | Numerology Expert 🔢 | Helping you gain clarity,
        confidence, and guidance in your journey ✨
      </p>
      <a
        href="#services"
        className="mt-6 bg-pink-500 text-white px-6 py-2 rounded-lg shadow hover:bg-pink-600 transition"
      >
        Explore My Services
      </a>
    </div>
  );
};

export default Home;
