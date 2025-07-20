import React from "react";
import { Link } from "react-router-dom";
import heroBackground from "../../assets/hero.jpg";

const Hero = () => {
  return (
    <div
      className="relative flex items-center justify-center h-[calc(100vh-96px)] bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      <div className="absolute inset-0 bg-white opacity-60"></div>

      <div className="relative z-10 text-center p-4">
        <h1 className="text-8xl md:text-9xl font-light text-[#301D16] mb-4 tracking-widest">
          PERK &amp; PAUSE
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8">
          Specialty coffee crafted with precision and served with purpose
        </p>
        <Link to="/menu">
          <button className="bg-[#301D16] text-white px-8 py-4 rounded-md text-lg flex items-center justify-center mx-auto hover:bg-[#4a342b] transition duration-300">
            EXPLORE MENU <span className="ml-3 text-2xl">&rarr;</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;