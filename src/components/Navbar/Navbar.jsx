import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import logo from '../../assets/logos.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center flex-none ml-4"> 
          <Link to="/">
            <img src={logo} alt="Luna Logo" className="h-12 mr-2" /> 
          </Link> 
        </div>

        <div className="hidden md:flex md:flex-grow items-center justify-center space-x-8">
          <Link to="/menu" className="text-[#301D16] hover:text-gray-600 transition duration-300">MENU</Link>
          <Link to="/team" className="text-[#301D16] hover:text-gray-600 transition duration-300">TEAM</Link>
          <Link to="/gallery" className="text-[#301D16] hover:text-gray-600 transition duration-300">GALLERY</Link>
          <Link to="/contact" className="text-[#301D16] hover:text-gray-600 transition duration-300">CONTACT</Link>
        </div>

        <div className="hidden md:flex items-center flex-none"> 
          <Link to="/reserve"> 
            <button className="bg-[#301D16] text-white px-5 py-2 rounded-md hover:bg-[#4a342b] transition duration-300">RESERVE</button>
          </Link>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-[#301D16] hover:text-gray-900">
            {isOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white mt-2 p-4 border-t border-gray-200">
          <nav className="flex flex-col space-y-4">
            <Link to="/menu" onClick={() => setIsOpen(false)} className="text-[#301D16] py-2 border-b border-gray-100">MENU</Link>
            <Link to="/team" onClick={() => setIsOpen(false)} className="text-[#301D16] py-2 border-b border-gray-100">TEAM</Link>
            <Link to="/gallery" onClick={() => setIsOpen(false)} className="text-[#301D16] py-2 border-b border-gray-100">GALLERY</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="text-[#301D16] py-2 border-b border-gray-100">CONTACT</Link>
            <Link to="/reserve" onClick={() => setIsOpen(false)}>
              <button className="bg-[#301D16] text-white px-5 py-2 rounded-md mt-4 hover:bg-[#4a342b] transition duration-300">RESERVE</button>
            </Link>
          </nav>
        </div>
      )}
    </nav>
  );
};

export default Navbar;