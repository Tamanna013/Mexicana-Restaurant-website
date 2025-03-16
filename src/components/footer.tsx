// Footer.jsx

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 mt-12">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 px-4">
        {/* Left Section */}
        <div className="flex flex-col space-y-8">
          <div className="flex items-center">
            {/* Los Tontos Logo */}
            <img
              src="https://example.com/los-tontos-logo.png" // Replace with actual logo URL
              alt="Los Tontos"
              className="w-36 h-auto"
            />
          </div>
          <div className="space-y-4">
            {/* Subsections with text */}
            <p className="text-sm">Subsection 1: Lorem ipsum dolor sit.</p>
            <p className="text-sm">Subsection 2: Amet consectetur adipiscing elit.</p>
            <p className="text-sm">Subsection 3: Integer nec odio.</p>
            <p className="text-sm">Subsection 4: Praesent libero.</p>
            <p className="text-sm">Subsection 5: Sed cursus ante dapibus diam.</p>
            <p className="text-sm">Subsection 6: Nulla quis sem at nibh elementum imperdiet.</p>
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col space-y-8">
          <h3 className="text-xl font-bold">Opening Hours</h3>
          <div className="space-y-4">
            <p className="text-sm">Monday: 9:00 AM - 6:00 PM</p>
            <p className="text-sm">Tuesday: 9:00 AM - 6:00 PM</p>
            <p className="text-sm">Wednesday: 9:00 AM - 6:00 PM</p>
            <p className="text-sm">Thursday: 9:00 AM - 6:00 PM</p>
            <p className="text-sm">Friday: 9:00 AM - 6:00 PM</p>
            <p className="text-sm">Saturday: 10:00 AM - 4:00 PM</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col space-y-8">
          <h3 className="text-xl font-bold">Stay in touch!</h3>
          <div className="space-y-4">
            <p className="text-sm">Tervuursesteenweg 602, 1982 Elewijt</p>
            <p className="text-sm">Werken bij Los Tontos</p>
            <p className="text-sm">Contacteer ons</p>
            <p className="text-sm">Privacy & Voorwaarden</p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-6 mt-6 justify-center">
            {/* Instagram Icon */}
            <a
              href="https://www.instagram.com"
              className="text-white hover:text-gray-400 transition duration-300"
            >
              <i className="fab fa-instagram fa-2x"></i>
            </a>
            {/* Facebook Icon */}
            <a
              href="https://www.facebook.com"
              className="text-white hover:text-gray-400 transition duration-300"
            >
              <i className="fab fa-facebook fa-2x"></i>
            </a>
            {/* Additional icons can go here */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
