import React, { useEffect, useState } from 'react';

function Navbar() {
  const [shadow, setShadow] = useState(false);

  const handleScroll = () => {
    setShadow(window.scrollY > 10);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar bg-base-100 max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 transition-shadow duration-300 z-50 ${shadow ? 'shadow-lg' : ''}`}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li><a href="#">Catalog</a></li>
            <li><a href="#">How it works</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Use-cases</a></li>
            <li><a href="#">Need Help?</a></li>
          </ul>
        </div>
        <a href="#" className="text-2xl font-bold cursor-pointer text-green-600">Printify</a>
      </div>
      
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4">
          <li><a href="#" className="text-gray-700 hover:text-gray-900">Catalog</a></li>
          <li><a href="#" className="text-gray-700 hover:text-gray-900">How it works</a></li>
          <li><a href="#" className="text-gray-700 hover:text-gray-900">Pricing</a></li>
          <li><a href="#" className="text-gray-700 hover:text-gray-900">Blog</a></li>
          <li><a href="#" className="text-gray-700 hover:text-gray-900">Services</a></li>
          <li><a href="#" className="text-gray-700 hover:text-gray-900">Use-cases</a></li>
          <li><a href="#" className="text-gray-700 hover:text-gray-900">Need Help?</a></li>
        </ul>
      </div>
      
      <div className="navbar-end flex items-center space-x-4">
        <button className="border border-gray-400 text-gray-700 px-4 py-2 rounded hover:bg-gray-100">Log in</button>
        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Sign up</button>
      </div>
    </div>
  );
}

export default Navbar;





/*

import React, { useEffect, useState } from 'react';

function Navbar() {
  const [shadow, setShadow] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setShadow(true);
    } else {
      setShadow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar bg-base-100 max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 transition-shadow duration-300 ${shadow ? 'shadow-lg' : ''}`}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li><a href="#">Catalog</a></li>
            <li><a href="#">How it works</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Use-cases</a></li>
            <li><a href="#">Need Help?</a></li>
          </ul>
        </div>
        <a href="#" className="text-2xl font-bold cursor-pointer text-green-600">Printify</a>
      </div>
      
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4">
          <li><a href="#" className="text-gray-700 hover:text-gray-900">Catalog</a></li>
          <li><a href="#" className="text-gray-700 hover:text-gray-900">How it works</a></li>
          <li><a href="#" className="text-gray-700 hover:text-gray-900">Pricing</a></li>
          <li><a href="#" className="text-gray-700 hover:text-gray-900">Blog</a></li>
          <li><a href="#" className="text-gray-700 hover:text-gray-900">Services</a></li>
          <li><a href="#" className="text-gray-700 hover:text-gray-900">Use-cases</a></li>
          <li><a href="#" className="text-gray-700 hover:text-gray-900">Need Help?</a></li>
        </ul>
      </div>
      
      <div className="navbar-end flex items-center space-x-4">
        <button className="border border-gray-400 text-gray-700 px-4 py-2 rounded hover:bg-gray-100">Log in</button>
        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Sign up</button>
      </div>
    </div>
  );
}

export default Navbar;

*/