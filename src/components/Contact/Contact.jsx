import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

const Contact = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-light text-[#301D16] mb-8">VISIT</h2>

          <div className="flex items-start mb-4">
            <LocationOnIcon className="text-[#301D16] mr-4 mt-1" />
            <div>
              <p className="font-semibold text-[#301D16]">ADDRESS</p>
              <p className="text-gray-600">123 Coffee Street</p>
              <p className="text-gray-600">Downtown, NY 10001</p>
            </div>
          </div>

          <div className="flex items-start mb-4">
            <AccessTimeIcon className="text-[#301D16] mr-4 mt-1" />
            <div>
              <p className="font-semibold text-[#301D16]">HOURS</p>
              <p className="text-gray-600">Monday - Friday: 7:00 - 19:00</p>
              <p className="text-gray-600">Saturday - Sunday: 8:00 - 20:00</p>
            </div>
          </div>

          <div className="flex items-start mb-4">
            <PhoneIcon className="text-[#301D16] mr-4 mt-1" />
            <div>
              <p className="font-semibold text-[#301D16]">PHONE</p>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>
          </div>

          <div className="flex items-start mb-8">
            <EmailIcon className="text-[#301D16] mr-4 mt-1" />
            <div>
              <p className="font-semibold text-[#301D16]">EMAIL</p>
              <p className="text-gray-600">hello@perk_pause.coffee</p>
            </div>
          </div>

          <div className="flex space-x-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#301D16] hover:text-gray-900 transition duration-300">
              <InstagramIcon fontSize="medium" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#301D16] hover:text-gray-900 transition duration-300">
              <TwitterIcon fontSize="medium" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#301D16] hover:text-gray-900 transition duration-300">
              <FacebookIcon fontSize="medium" />
            </a>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center md:justify-start">
          <div className="bg-white p-8 rounded-lg shadow-md max-w-sm w-full">
            <h3 className="text-xl font-semibold text-[#301D16] mb-2">Reserve Your Table</h3>
            <p className="text-gray-600 mb-6">Book your experience with us</p>
            <button className="bg-[#301D16] text-white px-6 py-3 rounded-md w-full flex items-center justify-center hover:bg-[#4a342b] transition duration-300">
              MAKE RESERVATION <span className="ml-2">&rarr;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;