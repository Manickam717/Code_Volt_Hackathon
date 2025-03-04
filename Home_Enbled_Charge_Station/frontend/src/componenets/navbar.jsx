import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed w-full z-50 transition-all duration-300 bg-[#0D1117]/90 backdrop-blur-lg shadow-lg">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 hover:scale-105 transition-transform">
          <i className="fas fa-bolt text-[#00F0FF] text-2xl animate-pulse"></i>
          <span className="text-xl font-bold bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] bg-clip-text text-transparent">EVLINK</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          {["Home", "Buy", "Sell", "About"].map((item) => (
            <Link key={item} to={`/${item.toLowerCase()}`} className="relative group">
              <span className="text-white hover:text-[#00F0FF] transition-colors duration-300 ease-in-out">{item}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00F0FF] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Link to="/login">
            <button className="px-6 py-2 rounded-full whitespace-nowrap bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] hover:opacity-90 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,240,255,0.3)]">
              Log In
            </button>
          </Link>
          <Link to="/signup">
            <button className="px-6 py-2 rounded-full whitespace-nowrap bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] hover:opacity-90 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,240,255,0.3)]">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;