import React, { useState } from 'react';
import logo from '../assets/pornhub_logo_straight.svg';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-secondary text-white shadow-md w-full z-50 pb-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-2">
          {/* Left Section: Logo and Hamburger */}
          <div className="flex items-center">
            {/* Hamburger Menu (visible on mobile) */}
            <button
              type="button"
              aria-label="Toggle Navigation Menu"
              className="mr-4 lg:hidden focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Logo */}
            <a href="/" className="flex items-center">
              <img src={logo} alt="Pornhub Logo" className="h-8" />
            </a>
          </div>

          {/* Middle Section: Search Bar */}
          <div className="hidden lg:flex flex-grow max-w-md mx-8">
            <form autoComplete="off" action="/video/search" method="get" className="relative w-full">
              <input
                type="text"
                name="search"
                placeholder="Search Pornhub"
                maxLength={100}
                aria-label="Search"
                className="w-full px-4 py-2 pl-10 bg-gray-700 text-gray-200 placeholder-gray-400 rounded-full focus:outline-none focus:ring-2 focus:ring-primary transition"
              />
              {/* Search Icon */}
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </form>
          </div>

          {/* Right Section: Icons and Links */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Upload and Profile Icons */}
            <a href="/" className="text-gray-300 hover:text-white" aria-label="Upload Video">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
            <a href="/" className="text-gray-300 hover:text-white" aria-label="Upload Image">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-4.553a2 2 0 012.828 0l1.414 1.414a2 2 0 010 2.828L19 14m-6 0v6m0-6h6m-6 0l-4-4" />
              </svg>
            </a>
            <a href="/" className="text-gray-300 hover:text-white" aria-label="User Profile">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 15c2.485 0 4.847.597 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Main Navigation Menu */}
        <nav className="hidden lg:flex justify-center space-x-6 mt-2">
          {['Home', 'Porn Videos', 'Categories', 'Live Cams', 'Pornstars', 'Fuck Now', 'Community', 'Photos & GIFs'].map((item) => (
            <a
              href="#"
              className="text-gray-300 hover:text-primary uppercase text-sm tracking-wide flex items-center"
              key={item}
            >
              {item}
              <svg className="ml-1 w-3 h-3 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5.25 7.5L10 12.25 14.75 7.5H5.25z" />
              </svg>
            </a>
          ))}
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="lg:hidden bg-secondary">
          <ul className="flex flex-col space-y-2 py-4">
            {['Home', 'Porn Videos', 'Categories', 'Live Cams', 'Pornstars', 'Fuck Now', 'Community', 'Photos & GIFs'].map((item) => (
              <li key={item}>
                <a
                  href="/"
                  className="block px-4 py-2 text-white hover:bg-primary transition"
                  onClick={(e) => e.preventDefault()}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
