import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart, FiMenu } from 'react-icons/fi';
import { AiOutlineUserAdd, AiOutlineUser } from 'react-icons/ai';
import { useCart } from '../../contexts/CartContext'; 
import logo from '../../assets/logo.png'; 

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { getCartTotalCount } = useCart(); 

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-indigo-400 to-purple-400 p-4 text-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between relative h-16">
       <div className="flex items-center">
        <img 
            src={logo} 
            alt="Logo" 
            className="absolute h-40 w-40 object-contain -top-12" 
            style={{ left: '0' }}
          />
       </div>

       <nav className="flex items-center space-x-4">
        <Link to="/signup" className="flex items-center space-x-2 text-lg hover:text-gray-300 hover:scale-105 transform transition duration-300">
         <AiOutlineUserAdd className="h-6 w-6" />
            <span>Sign Up</span>
          </Link>
          <Link to="/login" className="flex items-center space-x-2 text-lg hover:text-gray-300 hover:scale-105 transition duration-300">
            <AiOutlineUser className="h-6 w-6" />
            <span>Login</span>
          </Link>
          <Link to="/cart" className="relative flex items-center space-x-2 text-lg hover:text-gray-300 hover:scale-105 transition duration-300">
            <FiShoppingCart className="h-6 w-6" />
         
            {getCartTotalCount() > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full h-4 w-4 flex items-center justify-center text-xs">{getCartTotalCount()}</span>
            )}
          </Link>
          <button onClick={toggleMenu} className="flex items-center space-x-2 focus:outline-none text-lg hover:text-gray-300 hover:scale-105 transition duration-300">
            <FiMenu className="h-6 w-6" />
          </button>
        </nav>

       
        <div ref={dropdownRef} className={`absolute right-0 mt-12 w-48 bg-white rounded-md shadow-lg py-2 z-10 ${isMenuOpen ? 'grid' : 'hidden'}`}>
          <Link to="/" className="grid px-4 py-2 text-gray-800 hover:bg-gray-200 transition duration-300">
            Home
          </Link>
          <Link to="/about" className="grid px-4 py-2 text-gray-800 hover:bg-gray-200 transition duration-300">
            About Us
          </Link>
          <Link to="/contact" className="grid px-4 py-2 text-gray-800 hover:bg-gray-200 transition duration-300">
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;


