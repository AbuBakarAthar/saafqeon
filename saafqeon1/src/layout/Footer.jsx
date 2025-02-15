import React from "react";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-black text-white py-10 px-5 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo & Socials */}
        <div>
          <h2 className="text-2xl font-bold">SAAFQEON Technologies</h2>
          <div className="flex gap-4 mt-4">
            <FaInstagram className="text-2xl cursor-pointer" />
            <FaFacebookF className="text-2xl cursor-pointer" />
            <FaLinkedinIn className="text-2xl cursor-pointer" />
            <FaXTwitter className="text-2xl cursor-pointer" />
          </div>
        </div>
        
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Case Studies</li>
            <li>Saafqeon Research</li>
            <li>Start-Ups</li>
          </ul>
        </div>

        {/* Company Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Company Info</h3>
          <ul className="space-y-2">
            <li>Blogs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Cancellation & Refund Policy</li>
            <li>Careers</li>
          </ul>
        </div>
      </div>
      
      {/* Contact Info */}
      <div className="mt-10 border-t border-gray-700 pt-5 text-center md:text-left grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <p>Email: sales@saafqeon.com</p>
          <p>Phone: +92 300 1234567</p>
          <p>Phone: +1 773 270 9034</p>
        </div>
        <div>
          <p>Headquarters: 71-75 Shelton Street, WC2 H9J, sabzazar, lahore</p>
          <p>Office: 2335 W. Devon Ave, IL 6065, narowal </p>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="text-center mt-5 text-gray-400 text-sm">
        Copyright &copy; {new Date().getFullYear()} Saafqeon Technologies | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
