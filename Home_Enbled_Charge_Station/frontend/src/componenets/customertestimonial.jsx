import React from "react";

const CustomerTestimonialsSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] bg-clip-text text-transparent">
            What Our Customers Say
          </h2>
          <p className="text-gray-400 text-lg">
            Join thousands of satisfied EV owners who trust EVLINK
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-[#1C2128] p-8 rounded-xl hover:transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <img
                src="https://readdy.ai/api/search-image?query=professional headshot of indian male executive in business attire against neutral background modern corporate portrait&width=100&height=100&orientation=squarish&flag=0b607f0b08b8c2282e25627175ef37b8"
                alt="Rajesh Kumar"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-white">Rajesh Kumar</h4>
                <p className="text-sm text-gray-400">Tesla Model 3 Owner</p>
              </div>
            </div>
            <div className="flex mb-4">
              <i className="fas fa-star text-[#00F0FF]"></i>
              <i className="fas fa-star text-[#00F0FF]"></i>
              <i className="fas fa-star text-[#00F0FF]"></i>
              <i className="fas fa-star text-[#00F0FF]"></i>
              <i className="fas fa-star text-[#00F0FF]"></i>
            </div>
            <p className="text-gray-300 italic">
              "EVLINK made my EV purchase journey incredibly smooth. Their AI valuation tool helped me get the best price for my old vehicle."
            </p>
          </div>
          {/* Testimonial 2 */}
          <div className="bg-[#1C2128] p-8 rounded-xl hover:transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <img
                src="https://readdy.ai/api/search-image?query=professional headshot of indian female professional with modern business attire against neutral background corporate portrait&width=100&height=100&orientation=squarish&flag=fc09bceb6beeafce31fbce9033cecabc"
                alt="Priya Sharma"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-white">Priya Sharma</h4>
                <p className="text-sm text-gray-400">Ather 450X Owner</p>
              </div>
            </div>
            <div className="flex mb-4">
              <i className="fas fa-star text-[#00F0FF]"></i>
              <i className="fas fa-star text-[#00F0FF]"></i>
              <i className="fas fa-star text-[#00F0FF]"></i>
              <i className="fas fa-star text-[#00F0FF]"></i>
              <i className="fas fa-star text-[#00F0FF]"></i>
            </div>
            <p className="text-gray-300 italic">
              "The charging network is extensive and reliable. The app makes it super easy to find and book charging slots."
            </p>
          </div>
          {/* Testimonial 3 */}
          <div className="bg-[#1C2128] p-8 rounded-xl hover:transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <img
                src="https://readdy.ai/api/search-image?query=professional headshot of middle aged indian male in formal business wear against neutral background corporate portrait&width=100&height=100&orientation=squarish&flag=a72fc732541723ae9f5b4827dc6f9569"
                alt="Arun Patel"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-white">Arun Patel</h4>
                <p className="text-sm text-gray-400">MG ZS EV Owner</p>
              </div>
            </div>
            <div className="flex mb-4">
              <i className="fas fa-star text-[#00F0FF]"></i>
              <i className="fas fa-star text-[#00F0FF]"></i>
              <i className="fas fa-star text-[#00F0FF]"></i>
              <i className="fas fa-star text-[#00F0FF]"></i>
              <i className="fas fa-star text-[#00F0FF] opacity-50"></i>
            </div>
            <p className="text-gray-300 italic">
              "The multilingual support is fantastic. I can get assistance in Hindi, which makes the experience much more comfortable."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerTestimonialsSection;