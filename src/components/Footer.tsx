"use client";

import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      {/* Footer Container */}
      <div className="container mx-auto px-4">
        {/* Top Section: Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-8">
          <a href="#" className="text-white text-xl hover:text-gray-400">
            <FaFacebookF />
          </a>
          <a href="#" className="text-white text-xl hover:text-gray-400">
            <FaTwitter />
          </a>
          <a href="#" className="text-white text-xl hover:text-gray-400">
            <FaInstagram />
          </a>
        </div>

        {/* Middle Section: Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-center md:text-left">
          {/* Pages Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Pages</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>Phone: +123 456 789</li>
              <li>Email: info@example.com</li>
              <li>Address: 123 Main Street, City</li>
              <li>Working Hours: Mon-Fri, 9am-6pm</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Copy */}
        <div className="mt-10 text-center text-gray-400">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
