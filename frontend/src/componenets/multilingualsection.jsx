import React from "react";

const MultilingualSupportSection = () => {
  return (
    <section className="py-20 bg-[#1C2128] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0D1117]/20 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] rounded-full opacity-20 blur-2xl animate-pulse"></div>
            <img
              src="https://readdy.ai/api/search-image?query=3d render of futuristic AI assistant hologram interface with multiple language support floating in space with glowing particles&width=600&height=400&orientation=landscape&flag=86e8394e4f9e92b6853db397b9a1dea8"
              alt="Multilingual Support"
              className="w-full rounded-lg shadow-2xl relative z-10"
            />
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] bg-clip-text text-transparent">
              Your EV, Your Language
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Connect with our multilingual chatbot for instant, personalized support—available in your native language anytime, anywhere.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#0D1117] p-4 rounded-lg flex items-center gap-3 hover:bg-[#0D1117]/80 transition-colors">
                <i className="fas fa-language text-[#00F0FF]"></i>
                <span>English</span>
              </div>
              <div className="bg-[#0D1117] p-4 rounded-lg flex items-center gap-3 hover:bg-[#0D1117]/80 transition-colors">
                <i className="fas fa-language text-[#00F0FF]"></i>
                <span>हिंदी</span>
              </div>
              <div className="bg-[#0D1117] p-4 rounded-lg flex items-center gap-3 hover:bg-[#0D1117]/80 transition-colors">
                <i className="fas fa-language text-[#00F0FF]"></i>
                <span>తెలుగు</span>
              </div>
              <div className="bg-[#0D1117] p-4 rounded-lg flex items-center gap-3 hover:bg-[#0D1117]/80 transition-colors">
                <i className="fas fa-language text-[#00F0FF]"></i>
                <span>தமிழ்</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MultilingualSupportSection;