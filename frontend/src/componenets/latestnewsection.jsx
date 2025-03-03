import React from "react";

const LatestNewsSection = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-[#1C2128]">
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] bg-clip-text text-transparent">
            Latest News & Updates
          </h2>
          <p className="text-gray-400 text-lg">
            Stay informed about the latest developments in the EV industry and EVLINK platform.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 animate-slideInFromRight animation-delay-200">
          {/* News Item 1 */}
          <div className="group bg-[#0D1117] rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
            <div className="relative h-48 overflow-hidden">
              <img
                src="https://readdy.ai/api/search-image?query=modern electric vehicle charging station with multiple ports glowing in night urban setting professional photography&width=400&height=250&orientation=landscape&flag=56073e8b70b563d8e2e5c9a5d7601b11"
                alt="New Charging Stations Added"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute top-4 left-4 bg-[#00F0FF] text-black text-sm font-semibold px-3 py-1 rounded-full">Infrastructure</div>
            </div>
            <div className="p-6">
              <div className="text-gray-400 text-sm mb-2">March 1, 2025</div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#00F0FF] transition-colors">New Charging Stations Added</h3>
              <button className="text-[#00F0FF] font-semibold flex items-center gap-2 group-hover:gap-4 transition-all">
                Read More<i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
          {/* News Item 2 */}
          <div className="group bg-[#0D1117] rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
            <div className="relative h-48 overflow-hidden">
              <img
                src="https://readdy.ai/api/search-image?query=artificial intelligence visualization with glowing circuits and neural networks on dark background futuristic technology&width=400&height=250&orientation=landscape&flag=be1b22457aef6e899b5c1837ddac3912"
                alt="AI Features Enhancement"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute top-4 left-4 bg-[#00F0FF] text-black text-sm font-semibold px-3 py-1 rounded-full">Technology</div>
            </div>
            <div className="p-6">
              <div className="text-gray-400 text-sm mb-2">February 28, 2025</div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#00F0FF] transition-colors">AI Features Enhancement</h3>
              <button className="text-[#00F0FF] font-semibold flex items-center gap-2 group-hover:gap-4 transition-all">
                Read More<i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
          {/* News Item 3 */}
          <div className="group bg-[#0D1117] rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
            <div className="relative h-48 overflow-hidden">
              <img
                src="https://readdy.ai/api/search-image?query=diverse group of people celebrating success with electric vehicles in background modern urban setting&width=400&height=250&orientation=landscape&flag=77279e50909313d171a40f93c3212fe9"
                alt="Community Milestone"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute top-4 left-4 bg-[#00F0FF] text-black text-sm font-semibold px-3 py-1 rounded-full">Community</div>
            </div>
            <div className="p-6">
              <div className="text-gray-400 text-sm mb-2">February 25, 2025</div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#00F0FF] transition-colors">Community Milestone</h3>
              <button className="text-[#00F0FF] font-semibold flex items-center gap-2 group-hover:gap-4 transition-all">
                Read More<i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNewsSection;