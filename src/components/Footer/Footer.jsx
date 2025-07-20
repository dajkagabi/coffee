import React from 'react';
import logo from '../../assets/logos.png';

const Footer = () => {
  return (
    <footer className="bg-[#301D16] py-15 text-white">
      <div className="container mx-auto flex flex-col items-center justify-center space-y-4">
      
        <div className="flex items-center">
          <img src={logo} alt="Luna Logo" className="h-8 mr-2 invert" /> 
          <span className="text-xl font-bold">Perk & Pause</span>
        </div>

      
        <p className="text-sm text-white text-center">
          &copy; 2025 Perk & Pause Coffee. Crafted with passion.
        </p>
      </div>
    </footer>
  );
};

export default Footer;