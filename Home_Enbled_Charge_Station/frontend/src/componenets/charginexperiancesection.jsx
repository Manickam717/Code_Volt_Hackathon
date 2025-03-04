import React from "react";

const ChargingExperienceSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0D1117] bg-opacity-50 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] bg-clip-text text-transparent">
            Optimize Your Charging Experience
          </h2>
          <p className="text-gray-300 text-center text-lg max-w-3xl mx-auto">
            Our generative AI simulates real-world scenarios, dynamically adjusting pricing and recommending optimal station placements to reduce wait times and balance load across the network.
          </p>
        </div>
        <div className="flex flex-col items-center mb-16">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] rounded-lg blur opacity-30 animate-pulse"></div>
            <h2 className="relative text-5xl font-bold bg-gradient-to-r from-[#00F0FF] via-[#8A2BE2] to-[#00F0FF] bg-clip-text text-transparent animate-gradient bg-300">
              Featured EVs
            </h2>
          </div>
          <div className="mt-8 p-1 bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] rounded-full">
            <div className="flex gap-1 bg-[#1C2128] rounded-full p-1">
              <button className="px-8 py-2 !rounded-button whitespace-nowrap transition-all duration-500 bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] text-white transform scale-105">
                <span className="relative z-10 flex items-center gap-2"><i className="fas fa-fire"></i>Trending</span>
              </button>
              <button className="px-8 py-2 !rounded-button whitespace-nowrap transition-all duration-500 text-gray-400 hover:text-white">
                <span className="relative z-10 flex items-center gap-2"><i className="fas fa-clock"></i>Newest</span>
              </button>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {/* Card 1 */}
          <div className="group relative perspective-1000" style={{ transitionDelay: "0ms" }}>
            <div className="relative transform transition-all duration-700 preserve-3d hover:rotate-y-180 cursor-pointer" style={{ transformStyle: "preserve-3d" }}>
              <div className="relative bg-[#1C2128]/80 backdrop-blur-lg rounded-2xl p-6 shadow-[0_0_30px_rgba(0,240,255,0.1)]">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] rounded-2xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="relative overflow-hidden rounded-xl mb-6 group">
                    <img
                      src="https://readdy.ai/api/search-image?query=futuristic electric motorcycle with sleek design glowing blue accents on minimalist white background professional product photography&width=400&height=300&orientation=landscape&flag=ca292289a48caec8c889d858565d6488"
                      alt="Tesla Model B"
                      className="w-full h-56 object-cover transform transition-all duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C2128] to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <button className="px-6 py-3 !rounded-button whitespace-nowrap bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] text-white font-semibold hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] transition-all duration-300">Explore Now</button>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] bg-clip-text text-transparent">Tesla Model B</h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <span className="text-2xl font-bold text-white">$12,999</span>
                        <div className="h-6 w-px bg-gray-700"></div>
                        <span className="text-gray-400">2024</span>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-gray-700">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <i className="fas fa-bolt text-[#00F0FF]"></i>
                          <span className="text-gray-300">300 miles</span>
                        </div>
                        <div className="flex items-center gap-2 ml-auto">
                          <i className="fas fa-star text-[#00F0FF]"></i>
                          <span className="text-gray-300">4.9</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 backface-hidden rotate-y-180 bg-[#1C2128]/90 backdrop-blur-lg rounded-2xl p-6" style={{ backfaceVisibility: "hidden" }}>
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] rounded-2xl blur opacity-30"></div>
                <div className="relative h-full flex flex-col justify-between">
                  <div>
                    <h4 className="text-xl font-bold text-[#00F0FF] mb-4">Specifications</h4>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-gray-300">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] flex items-center justify-center">
                          <i className="fas fa-check text-sm"></i>
                        </div>
                        <span>0-60 mph: 2.8s</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-300">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] flex items-center justify-center">
                          <i className="fas fa-check text-sm"></i>
                        </div>
                        <span>Peak Power: 180 kW</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-300">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] flex items-center justify-center">
                          <i className="fas fa-check text-sm"></i>
                        </div>
                        <span>Weight: 485 lbs</span>
                      </div>
                    </div>
                  </div>
                  <button className="w-full py-4 !rounded-button whitespace-nowrap bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] text-white font-semibold hover:shadow-[0_0_30px_rgba(0,240,255,0.3)] transition-all duration-300">Reserve Now</button>
                </div>
              </div>
            </div>
          </div>
          {/* Repeat similar structure for other EVs */}
          {/* Card 2 */}
          <div className="group relative perspective-1000" style={{ transitionDelay: "150ms" }}>
            <div className="relative transform transition-all duration-700 preserve-3d hover:rotate-y-180 cursor-pointer" style={{ transformStyle: "preserve-3d" }}>
              <div className="relative bg-[#1C2128]/80 backdrop-blur-lg rounded-2xl p-6 shadow-[0_0_30px_rgba(0,240,255,0.1)]">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] rounded-2xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="relative overflow-hidden rounded-xl mb-6 group">
                    <img
                      src="https://readdy.ai/api/search-image?query=modern electric bike with carbon fiber frame and neon lighting elements on clean studio background high end commercial photography&width=400&height=300&orientation=landscape&flag=bfd141e73db1411a24bf49671b2c8821"
                      alt="Rivian E-Bike Pro"
                      className="w-full h-56 object-cover transform transition-all duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C2128] to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <button className="px-6 py-3 !rounded-button whitespace-nowrap bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] text-white font-semibold hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] transition-all duration-300">Explore Now</button>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] bg-clip-text text-transparent">Rivian E-Bike Pro</h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <span className="text-2xl font-bold text-white">$9,999</span>
                        <div className="h-6 w-px bg-gray-700"></div>
                        <span className="text-gray-400">2024</span>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-gray-700">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <i className="fas fa-bolt text-[#00F0FF]"></i>
                          <span className="text-gray-300">250 miles</span>
                        </div>
                        <div className="flex items-center gap-2 ml-auto">
                          <i className="fas fa-star text-[#00F0FF]"></i>
                          <span className="text-gray-300">4.9</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 backface-hidden rotate-y-180 bg-[#1C2128]/90 backdrop-blur-lg rounded-2xl p-6" style={{ backfaceVisibility: "hidden" }}>
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] rounded-2xl blur opacity-30"></div>
                <div className="relative h-full flex flex-col justify-between">
                  <div>
                    <h4 className="text-xl font-bold text-[#00F0FF] mb-4">Specifications</h4>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-gray-300">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] flex items-center justify-center">
                          <i className="fas fa-check text-sm"></i>
                        </div>
                        <span>0-60 mph: 3.2s</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-300">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] flex items-center justify-center">
                          <i className="fas fa-check text-sm"></i>
                        </div>
                        <span>Peak Power: 150 kW</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-300">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] flex items-center justify-center">
                          <i className="fas fa-check text-sm"></i>
                        </div>
                        <span>Weight: 450 lbs</span>
                      </div>
                    </div>
                  </div>
                  <button className="w-full py-4 !rounded-button whitespace-nowrap bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] text-white font-semibold hover:shadow-[0_0_30px_rgba(0,240,255,0.3)] transition-all duration-300">Reserve Now</button>
                </div>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="group relative perspective-1000" style={{ transitionDelay: "300ms" }}>
            <div className="relative transform transition-all duration-700 preserve-3d hover:rotate-y-180 cursor-pointer" style={{ transformStyle: "preserve-3d" }}>
              <div className="relative bg-[#1C2128]/80 backdrop-blur-lg rounded-2xl p-6 shadow-[0_0_30px_rgba(0,240,255,0.1)]">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] rounded-2xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="relative overflow-hidden rounded-xl mb-6 group">
                    <img
                      src="https://readdy.ai/api/search-image?query=premium electric sports motorcycle with advanced tech features and LED lighting on minimalist background professional product shot&width=400&height=300&orientation=landscape&flag=2c53de9256036dd1af3669a6fbdfef10"
                      alt="Neo X-1000"
                      className="w-full h-56 object-cover transform transition-all duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C2128] to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <button className="px-6 py-3 !rounded-button whitespace-nowrap bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] text-white font-semibold hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] transition-all duration-300">Explore Now</button>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] bg-clip-text text-transparent">Neo X-1000</h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <span className="text-2xl font-bold text-white">$15,999</span>
                        <div className="h-6 w-px bg-gray-700"></div>
                        <span className="text-gray-400">2025</span>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-gray-700">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <i className="fas fa-bolt text-[#00F0FF]"></i>
                          <span className="text-gray-300">400 miles</span>
                        </div>
                        <div className="flex items-center gap-2 ml-auto">
                          <i className="fas fa-star text-[#00F0FF]"></i>
                          <span className="text-gray-300">4.9</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 backface-hidden rotate-y-180 bg-[#1C2128]/90 backdrop-blur-lg rounded-2xl p-6" style={{ backfaceVisibility: "hidden" }}>
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] rounded-2xl blur opacity-30"></div>
                <div className="relative h-full flex flex-col justify-between">
                  <div>
                    <h4 className="text-xl font-bold text-[#00F0FF] mb-4">Specifications</h4>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-gray-300">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] flex items-center justify-center">
                          <i className="fas fa-check text-sm"></i>
                        </div>
                        <span>0-60 mph: 2.5s</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-300">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] flex items-center justify-center">
                          <i className="fas fa-check text-sm"></i>
                        </div>
                        <span>Peak Power: 200 kW</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-300">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] flex items-center justify-center">
                          <i className="fas fa-check text-sm"></i>
                        </div>
                        <span>Weight: 495 lbs</span>
                      </div>
                    </div>
                  </div>
                  <button className="w-full py-4 !rounded-button whitespace-nowrap bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] text-white font-semibold hover:shadow-[0_0_30px_rgba(0,240,255,0.3)] transition-all duration-300">Reserve Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
          .rotate-y-180 {
            transform: rotateY(180deg);
          }
          .backface-hidden {
            backface-visibility: hidden;
          }
          .preserve-3d {
            transform-style: preserve-3d;
          }
          .bg-grid-pattern {
            background-image: linear-gradient(to right, #1C2128 1px, transparent 1px),
            linear-gradient(to bottom, #1C2128 1px, transparent 1px);
            background-size: 24px 24px;
          }
        `}
      </style>
    </section>
  );
};

export default ChargingExperienceSection;