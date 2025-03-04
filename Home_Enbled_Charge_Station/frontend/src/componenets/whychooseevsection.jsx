import React from "react";

const WhyChooseEVLINKSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0D1117] bg-opacity-50 backdrop-blur-sm"></div>
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] bg-clip-text text-transparent">
            Why Choose EVLINK?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Join thousands of satisfied customers who have transformed their EV experience with our innovative solutions.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] rounded-lg opacity-20 blur-xl"></div>
              <img
                src="https://readdy.ai/api/search-image?query=futuristic mobile app interface showing electric vehicle charging station locations and availability with glowing neon elements dark theme professional UI design&width=600&height=400&orientation=landscape&flag=a8a3c4aff8298896701b4e1b4eb3621f"
                alt="Mobile App Interface"
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
          </div>
          <div className="space-y-8">
            <div className="space-y-6">
              {/* Real-time Monitoring Card */}
              <div className="group flex items-start gap-4 p-6 bg-[#1C2128] rounded-xl hover:bg-[#1C2128]/80 transition-all duration-300">
                <div className="relative w-12 h-12 flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] rounded-lg blur opacity-60"></div>
                  <div className="relative h-full bg-[#0D1117] rounded-lg flex items-center justify-center">
                    <i className="fas fa-chart-line text-xl bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] bg-clip-text text-transparent"></i>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Real-time Monitoring</h3>
                  <p className="text-gray-400">Track charging status, battery health, and performance metrics in real-time</p>
                </div>
              </div>
              {/* Predictive Maintenance Card */}
              <div className="group flex items-start gap-4 p-6 bg-[#1C2128] rounded-xl hover:bg-[#1C2128]/80 transition-all duration-300">
                <div className="relative w-12 h-12 flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] rounded-lg blur opacity-60"></div>
                  <div className="relative h-full bg-[#0D1117] rounded-lg flex items-center justify-center">
                    <i className="fas fa-tools text-xl bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] bg-clip-text text-transparent"></i>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Predictive Maintenance</h3>
                  <p className="text-gray-400">AI-powered alerts to prevent potential issues before they occur</p>
                </div>
              </div>
              {/* Smart Payments Card */}
              <div className="group flex items-start gap-4 p-6 bg-[#1C2128] rounded-xl hover:bg-[#1C2128]/80 transition-all duration-300">
                <div className="relative w-12 h-12 flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] rounded-lg blur opacity-60"></div>
                  <div className="relative h-full bg-[#0D1117] rounded-lg flex items-center justify-center">
                    <i className="fas fa-wallet text-xl bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] bg-clip-text text-transparent"></i>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Smart Payments</h3>
                  <p className="text-gray-400">Seamless and secure transactions with multiple payment options</p>
                </div>
              </div>
              {/* Green Energy Integration Card */}
              <div className="group flex items-start gap-4 p-6 bg-[#1C2128] rounded-xl hover:bg-[#1C2128]/80 transition-all duration-300">
                <div className="relative w-12 h-12 flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] rounded-lg blur opacity-60"></div>
                  <div className="relative h-full bg-[#0D1117] rounded-lg flex items-center justify-center">
                    <i className="fas fa-leaf text-xl bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] bg-clip-text text-transparent"></i>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Green Energy Integration</h3>
                  <p className="text-gray-400">Connect with renewable energy sources for sustainable charging</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseEVLINKSection;