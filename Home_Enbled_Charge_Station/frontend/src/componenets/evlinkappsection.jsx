import React from "react";

const DownloadEVLINKAppSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] bg-clip-text text-transparent">
              Download the EVLINK App
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Get real-time charging station updates, manage your EV, and access exclusive deals right from your phone.
            </p>
            <div className="space-y-6">
              {/* Real-time Navigation */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#1C2128] flex items-center justify-center">
                  <i className="fas fa-map-marker-alt text-[#00F0FF]"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-white">Real-time Navigation</h3>
                  <p className="text-gray-400 text-sm">Find the nearest charging station with live availability</p>
                </div>
              </div>
              {/* Smart Charging */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#1C2128] flex items-center justify-center">
                  <i className="fas fa-bolt text-[#00F0FF]"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-white">Smart Charging</h3>
                  <p className="text-gray-400 text-sm">Schedule and monitor charging sessions</p>
                </div>
              </div>
              {/* Easy Payments */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#1C2128] flex items-center justify-center">
                  <i className="fas fa-wallet text-[#00F0FF]"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-white">Easy Payments</h3>
                  <p className="text-gray-400 text-sm">Seamless payment options and rewards</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <button className="px-6 py-3 !rounded-button whitespace-nowrap bg-black text-white font-semibold flex items-center gap-2 hover:bg-black/80 transition-all duration-300">
                <i className="fab fa-apple text-xl"></i>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div>App Store</div>
                </div>
              </button>
              <button className="px-6 py-3 !rounded-button whitespace-nowrap bg-black text-white font-semibold flex items-center gap-2 hover:bg-black/80 transition-all duration-300">
                <i className="fab fa-google-play text-xl"></i>
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div>Google Play</div>
                </div>
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] rounded-3xl opacity-20 blur-2xl animate-pulse"></div>
            <img
              src="https://static.readdy.ai/image/0f466ac1463fdaafcd01a38a47703b20/3dcc5d3da3f7cdf82623751dacdfec7f.png"
              alt="EVLINK Mobile App"
              className="relative z-10 w-full rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-4 -right-4 bg-white rounded-full px-4 py-2 shadow-lg flex items-center gap-2">
              <span className="text-black font-bold">100K+</span>
              <span className="text-gray-600 text-sm">Downloads</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadEVLINKAppSection;