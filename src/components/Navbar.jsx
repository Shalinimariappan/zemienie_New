import { useState } from 'react';
import { FaBars, FaChevronDown, FaEnvelope, FaPhone } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  return (
    <>
   {/* Top Contact Bar */}
<div className="py-2 text-white bg-blue-600 md:px-16">
  <div className="container flex flex-wrap items-center justify-between mx-auto text-sm">
    {/* Contact Info - Email */}
    <div className="flex flex-wrap items-center space-x-2">
      <span className="flex items-center">
        <FaEnvelope className="mr-2" /> info@zemienie.com
      </span>
    </div>
    
    {/* Phone Number */}
    <div className="flex items-center space-x-2">
      <FaPhone className="mr-1" />
      <span>+1 (555) 123-4567</span>
    </div>
  </div>
</div>

      {/* Main Header */}
      <header className="px-4 bg-white shadow-md md:px-16">
        <div className="flex items-center justify-between py-4">
          <a href="/" className="flex items-center">
            <div className="flex items-center">
              {/* Original logo size */}
              <img 
                src={logo} 
                alt="Zemienie Logo" 
                className="h-10 md:h-16"
              />
              {/* Text moved closer and perfectly aligned */}
              <span className="ml-2 text-2xl font-bold text-blue-600 font-playfair md:ml-3">ZEMIENIE</span>
            </div>
          </a>

          <button className="block md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <FaBars className="text-2xl text-blue-600" />
          </button>

          <nav className="hidden space-x-6 font-medium text-black md:flex">
            <a href="/" className="hover:text-blue-800">Home</a>
            <a href="about" className="hover:text-blue-800">About Us</a>

            <div className="relative">
              <button 
                onClick={() => setDropdownOpen(!dropdownOpen)} 
                className="flex items-center hover:text-blue-800"
              >
                Services <FaChevronDown className="ml-1" />
              </button>
              {dropdownOpen && (
                <div className="absolute left-0 z-50 w-40 mt-2 bg-white border rounded-lg shadow-lg">
                  <a href="revenue" className="block px-4 py-2 hover:bg-blue-100">Revenue Cycle Management</a>
                  <a href="imaging" className="block px-4 py-2 hover:bg-blue-100">Imaging Center Billing</a>
                  <a href="credentialing" className="block px-4 py-2 hover:bg-blue-100">Credentialing Process</a>
                  <a href="macra" className="block px-4 py-2 hover:bg-blue-100">MACRA / QPP</a>
                </div>
              )}
            </div>

            <a href="specialist" className="hover:text-blue-800">Specialties</a>
            <a href="career" className="hover:text-blue-800">Careers</a>
            <a href="contact" className="hover:text-blue-800">Contact Us</a>
          </nav>
        </div>

        {mobileMenuOpen && (
          <div className="bg-white border-t md:hidden">
            <a href="/" className="block px-4 py-2 hover:bg-blue-100">Home</a>
            <a href="about" className="block px-4 py-2 hover:bg-blue-100">About Us</a>

            <div className="relative">
              <button 
                onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)} 
                className="flex items-center justify-between w-full px-4 py-2 text-left hover:bg-blue-100"
              >
                Services <FaChevronDown />
              </button>
              {mobileDropdownOpen && (
                <div className="bg-gray-100">
                  <a href="revenue" className="block px-4 py-2 hover:bg-blue-200">Revenue Cycle Management</a>
                  <a href="imaging" className="block px-4 py-2 hover:bg-blue-200">Imaging Center Billing</a>
                  <a href="credentialing" className="block px-4 py-2 hover:bg-blue-200">Credentialing Process</a>
                  <a href="macra" className="block px-4 py-2 hover:bg-blue-200">MACRA / QPP</a>
                </div>
              )}
            </div>

            <a href="specialist" className="block px-4 py-2 hover:bg-blue-100">Specialties</a>
            <a href="career" className="block px-4 py-2 hover:bg-blue-100">Careers</a>
            <a href="contact" className="block px-4 py-2 hover:bg-blue-100">Contact Us</a>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;