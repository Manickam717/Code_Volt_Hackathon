import React from "react";

const EVValueSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0D1117] bg-opacity-50 backdrop-blur-sm"></div>
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] bg-clip-text text-transparent">
              Unlock the True Value of Your EV
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Seamlessly buy, sell, and trade electric two-wheelers with our AI-powered platform that delivers accurate condition reports and fair resale valuations.
            </p>
            <div className="flex gap-4">
              <button className="px-6 py-3 !rounded-button whitespace-nowrap bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] text-white font-semibold hover:shadow-[0_0_30px_rgba(0,240,255,0.3)] transition-all duration-300">
                Get Valuation
              </button>
              <button className="px-6 py-3 !rounded-button whitespace-nowrap border-2 border-[#00F0FF] text-[#00F0FF] font-semibold hover:bg-[#00F0FF] hover:text-black transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative perspective-1000">
            <div className="group transform transition-all duration-700 preserve-3d hover:rotate-y-180" style={{ transformStyle: "preserve-3d" }}>
              <div className="relative bg-[#1C2128] rounded-xl p-6 backface-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=professional detailed condition report interface of electric motorcycle with technical specifications and analytics modern futuristic design&width=600&height=400&orientation=landscape&flag=40d07206ac087120a96e52bb505b28a2"
                  alt="EV Condition Report"
                  className="w-full rounded-lg shadow-lg"
                />
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Battery Health</span>
                    <span className="text-[#00F0FF]">95%</span>
                  </div>
                  <div className="w-full h-2 bg-[#0D1117] rounded-full overflow-hidden">
                    <div className="w-[95%] h-full bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2]"></div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 backface-hidden rotate-y-180 bg-[#1C2128] rounded-xl p-6">
                <div className="h-full flex flex-col justify-between">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-[#00F0FF]">AI-Generated Insights</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-gray-300">
                        <i className="fas fa-check-circle text-[#00F0FF]"></i>
                        <span>Excellent battery performance</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <i className="fas fa-check-circle text-[#00F0FF]"></i>
                        <span>Minor cosmetic wear</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <i className="fas fa-check-circle text-[#00F0FF]"></i>
                        <span>Regular maintenance history</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <i className="fas fa-check-circle text-[#00F0FF]"></i>
                        <span>Original parts intact</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] bg-clip-text text-transparent">
                      Estimated Value: ₹85,000
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EVValueSection;