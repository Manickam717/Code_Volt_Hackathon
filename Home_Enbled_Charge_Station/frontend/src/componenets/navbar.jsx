import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Signup from "./Signup";

const Header = () => {
  const navigate = useNavigate();

  const handleSignupClick = () => {
    return <Signup />
  };

  return (
    <header className="fixed w-full z-50 transition-all duration-300 bg-[#0D1117]/95 backdrop-blur-xl shadow-lg border-b border-[#00F0FF]/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 hover:scale-105 transition-transform cursor-pointer">
          <i className="fas fa-bolt text-[#00F0FF] text-2xl animate-pulse"></i>
          <span className="text-xl font-black tracking-wider bg-gradient-to-r from-[#00F0FF] via-[#8A2BE2] to-[#00F0FF] bg-clip-text text-transparent animate-gradient-x uppercase">EVLINK</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          {["Home", "Buy", "Sell", "About"].map((item) => (
            <Link key={item} to={`/`} className="relative group">
              <span className="text-white/80 hover:text-[#00F0FF] transition-colors duration-300 ease-in-out text-sm font-semibold tracking-wide uppercase">{item}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link to="/login">
            <button className="px-5 py-1.5 rounded-full whitespace-nowrap bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] hover:opacity-90 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] text-sm font-semibold tracking-wide uppercase">
              Log In
            </button>
          </Link>
          <button onClick={handleSignupClick} className="px-5 py-1.5 rounded-full whitespace-nowrap bg-gradient-to-r from-[#8A2BE2] to-[#00F0FF] hover:opacity-90 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] text-sm font-semibold tracking-wide uppercase">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;