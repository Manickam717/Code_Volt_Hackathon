import React from "react";

const FutureOfMobilitySection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0D1117] bg-opacity-50 backdrop-blur-sm"></div>
      <div className="max-w-7xl mx-auto px-6 relative">
        <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] bg-clip-text text-transparent">
          Transforming the Future of Mobility
        </h2>
        <p className="text-gray-400 text-center text-lg mb-16 max-w-2xl mx-auto">
          Experience the next generation of electric vehicles with cutting-edge technology and sustainable solutions.
        </p>
        <div className="grid md:grid-cols-4 gap-8">
          {/* Smart Charging Card */}
          <div className="group bg-[#1C2128] rounded-xl p-8 hover:transform hover:scale-105 transition-all duration-300">
            <div className="relative w-16 h-16 mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] rounded-lg blur opacity-60 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative h-full bg-[#0D1117] rounded-lg flex items-center justify-center">
                <i className="fas fa-charging-station text-2xl bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] bg-clip-text text-transparent"></i>
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Smart Charging</h3>
            <p className="text-gray-400 mb-4">Optimize charging schedules and reduce range anxiety with AI-powered solutions</p>
            <div className="pt-4 border-t border-gray-700">
              <span className="text-2xl font-bold bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] bg-clip-text text-transparent">500+ Stations</span>
            </div>
          </div>
          {/* Transparent Resale Card */}
          <div className="group bg-[#1C2128] rounded-xl p-8 hover:transform hover:scale-105 transition-all duration-300">
            <div className="relative w-16 h-16 mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] rounded-lg blur opacity-60 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative h-full bg-[#0D1117] rounded-lg flex items-center justify-center">
                <i className="fas fa-exchange-alt text-2xl bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] bg-clip-text text-transparent"></i>
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Transparent Resale</h3>
            <p className="text-gray-400 mb-4">Create a trusted marketplace with verified condition reports and fair valuations</p>
            <div className="pt-4 border-t border-gray-700">
              <span className="text-2xl font-bold bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] bg-clip-text text-transparent">10K+ Transactions</span>
            </div>
          </div>
          {/* Community Support Card */}
          <div className="group bg-[#1C2128] rounded-xl p-8 hover:transform hover:scale-105 transition-all duration-300">
            <div className="relative w-16 h-16 mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] rounded-lg blur opacity-60 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative h-full bg-[#0D1117] rounded-lg flex items-center justify-center">
                <i className="fas fa-users text-2xl bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] bg-clip-text text-transparent"></i>
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Community Support</h3>
            <p className="text-gray-400 mb-4">Join a growing network of EV enthusiasts and share experiences</p>
            <div className="pt-4 border-t border-gray-700">
              <span className="text-2xl font-bold bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] bg-clip-text text-transparent">50K+ Members</span>
            </div>
          </div>
          {/* Secure Platform Card */}
          <div className="group bg-[#1C2128] rounded-xl p-8 hover:transform hover:scale-105 transition-all duration-300">
            <div className="relative w-16 h-16 mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] rounded-lg blur opacity-60 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative h-full bg-[#0D1117] rounded-lg flex items-center justify-center">
                <i className="fas fa-shield-alt text-2xl bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] bg-clip-text text-transparent"></i>
              </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Secure Platform</h3>
            <p className="text-gray-400 mb-4">Advanced encryption and blockchain technology for secure transactions</p>
            <div className="pt-4 border-t border-gray-700">
              <span className="text-2xl font-bold bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] bg-clip-text text-transparent">100% Safe</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureOfMobilitySection;