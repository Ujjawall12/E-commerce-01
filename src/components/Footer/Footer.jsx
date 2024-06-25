import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import logo from '../../assets/logo.png'; 

function Footer(props) {
  return (
     <>
       <div className="bg-gradient-to-r from-indigo-300 to-purple-300 p-4 text-white shadow-lg flex justify-between">
       
     <div className="w-2/3 flex flex-col">
       <div className="flex justify-between">
     <Link to="/" className="px-4 py-2 text-gray-800 hover:scale-105 transform transition duration-300">
       Home
     </Link>
     <Link to="/about" className="px-4 py-2 text-gray-800 hover:scale-105 transform transition duration-300">
       About Us
     </Link>
     <Link to="/contact" className="px-4 py-2 text-gray-800 hover:scale-105 transform transition duration-300">
       Contact Us
     </Link>
       </div>
       <div className="flex justify-between">
     <Link to="/Blog" className="px-4 py-2 text-gray-800 hover:scale-105 transform transition duration-300">
       Blog
     </Link>
     <Link to="/FAQ" className="px-4 py-2 text-gray-800 hover:scale-105 transform transition duration-300">
       FAQ
     </Link>
     <Link to="/CorporateInfo" className="px-4 py-2 text-gray-800 hover:scale-105 transform transition duration-300">
       Corporate Info
     </Link>
       </div>
       <div className="flex justify-between">
     <Link to="/PrivacyPolicy" className="px-4 py-2 text-gray-800 hover:scale-105 transform transition duration-300">
       Privacy Policy
     </Link>
     <Link to="/TermsConditions" className="px-4 py-2 text-gray-800 hover:scale-105 transform transition duration-300">
       Terms & Conditions
     </Link>
     <Link to="/TermsOfUse" className="px-4 py-2 text-gray-800 hover:scale-105 transform transition duration-300">
       Terms Of Use
     </Link>
       </div>
     </div>
     
     <div className="w-1/3 flex flex-col items-end justify-center space-y-4">
       <h3 className="text-lg font-bold mb-2">Follow Us</h3>
       <div className="flex items-center space-x-4">
     <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
       <FaInstagram className="h-6 w-6 hover:text-gray-400 transition duration-300" />
     </a>
     <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
       <FaFacebookF className="h-6 w-6 hover:text-gray-400 transition duration-300" />
     </a>
     <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
       <FaLinkedinIn className="h-6 w-6 hover:text-gray-400 transition duration-300" />
     </a>
     <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
       <FaTwitter className="h-6 w-6 hover:text-gray-400 transition duration-300" />
     </a>
       </div>
     </div>
       </div>
       
   
       <div className="bg-gradient-to-r from-gray-900 to-gray-700 py-2 px-4 text-white shadow-lg relative flex items-center justify-between">
    
     <div className="flex items-center">
       <img src={logo} 
     alt="Logo" 
     className="h-20 w-20 object-contain" 
     style={{ left: '0' }} />
     </div>
    
     <div className="text-right">
       <p className="text-sm">Made with <span className="text-red-500">❤</span> by Ujjawal</p>
     </div>
       </div>
     </>
  );
}

export default Footer;















