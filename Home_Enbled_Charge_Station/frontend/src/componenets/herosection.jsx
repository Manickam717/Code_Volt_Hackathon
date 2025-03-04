import React from "react";

const Section = () => {
  return (
    <section className="pt-20 relative overflow-hidden min-h-screen flex items-center justify-center perspective-1000">
      <div className="absolute inset-0 bg-[url('https://readdy.ai/api/search-image?query=futuristic cyberpunk cityscape with neon lights and holographic displays floating in air modern urban environment with dramatic lighting and atmosphere cinematic shot&width=1440&height=800&orientation=landscape&flag=1fcd8c9b3c46482b97abafbaf9a5b526')] bg-cover bg-center opacity-20 animate-pulse-slow">
        <div className="absolute inset-0 bg-[#0D1117]/50 backdrop-blur-sm"></div>
      </div>
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-[#0D1117]/80 to-[#0D1117]"></div>
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center relative">
        <div className="space-y-8 animate-float">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] rounded-lg blur opacity-30 animate-pulse"></div>
            <h1 className="relative text-7xl font-bold leading-tight tracking-tight">
              <span className="block bg-gradient-to-r from-[#00F0FF] via-[#8A2BE2] to-[#00F0FF] bg-clip-text text-transparent animate-gradient bg-300">EVLINK</span>
              <span className="block text-white mt-2 animate-slideInUp text-5xl">Redefining the Future of</span>
              <span className="block text-white mt-2 animate-slideInUp animation-delay-200 text-5xl">Electric Mobility in India</span>
            </h1>
          </div>
          <p className="text-white text-xl leading-relaxed animate-fadeIn animation-delay-500 relative">
            <span className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#8A2BE2] to-transparent"></span>
            Discover our AI-driven platform that optimizes charging infrastructure, streamlines EV resale, and delivers multilingual support—all through an immersive 3D interactive experience.
          </p>
          <div className="flex gap-6 animate-fadeIn animation-delay-700">
            <button className="group px-8 py-4 !rounded-button whitespace-nowrap bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] text-white font-semibold relative overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,240,255,0.5)]">
              <span className="absolute inset-0 bg-white mix-blend-overlay opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              <span className="relative flex items-center gap-2">Explore Our Solutions<i className="fas fa-bolt group-hover:animate-pulse transition-transform duration-300"></i></span>
            </button>
            <button className="group px-8 py-4 !rounded-button whitespace-nowrap border-2 border-[#00F0FF] text-[#00F0FF] font-semibold relative overflow-hidden hover:border-transparent transition-all duration-300">
              <span className="absolute inset-0 bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative group-hover:text-white transition-colors duration-300">Learn More</span>
            </button>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#0D1117] to-transparent"></div>
        </div>
        <div className="relative perspective-1000 animate-float-slow">
          <div className="absolute -inset-8 bg-gradient-conic from-[#00F0FF] via-[#8A2BE2] to-[#00F0FF] rounded-full opacity-30 blur-2xl animate-spin-slow"></div>
          <div className="relative transform hover:rotate-y-12 transition-transform duration-700 ease-out">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] rounded-lg opacity-30 blur-xl"></div>
            <img
              src="https://readdy.ai/api/search-image?query=hyperrealistic 3d render of futuristic electric motorcycle with holographic displays and floating energy particles dramatic lighting cinematic composition&width=600&height=400&orientation=landscape&flag=33a11601a6efdb186c5dd8bf0cc5fe75"
              alt="Featured EV"
              className="w-full rounded-lg shadow-2xl relative z-10"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#00F0FF]/20 to-transparent mix-blend-overlay rounded-lg"></div>
            <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-[#8A2BE2] rounded-full blur-2xl opacity-30 animate-pulse"></div>
            <div className="absolute -left-8 -top-8 w-32 h-32 bg-[#00F0FF] rounded-full blur-2xl opacity-30 animate-pulse animation-delay-500"></div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00F0FF]/50 to-transparent"></div>
    </section>
  );
};

export default Section;