import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1C2128] py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <i className="fas fa-bolt text-[#00F0FF] text-2xl"></i>
              <span className="text-xl font-bold bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] bg-clip-text text-transparent">EVLINK</span>
            </div>
            <p className="text-gray-400">
              Transforming the future of electric mobility with innovative solutions and sustainable technology.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-[#0D1117] flex items-center justify-center hover:bg-gradient-to-r hover:from-[#00F0FF] hover:to-[#8A2BE2] transition-all duration-300 group">
                <i className="fab fa-facebook text-gray-400 group-hover:text-white transition-colors"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#0D1117] flex items-center justify-center hover:bg-gradient-to-r hover:from-[#00F0FF] hover:to-[#8A2BE2] transition-all duration-300 group">
                <i className="fab fa-twitter text-gray-400 group-hover:text-white transition-colors"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#0D1117] flex items-center justify-center hover:bg-gradient-to-r hover:from-[#00F0FF] hover:to-[#8A2BE2] transition-all duration-300 group">
                <i className="fab fa-linkedin text-gray-400 group-hover:text-white transition-colors"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#0D1117] flex items-center justify-center hover:bg-gradient-to-r hover:from-[#00F0FF] hover:to-[#8A2BE2] transition-all duration-300 group">
                <i className="fab fa-instagram text-gray-400 group-hover:text-white transition-colors"></i>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-[#00F0FF] transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#00F0FF] transition-colors">Our Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#00F0FF] transition-colors">Charging Network</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#00F0FF] transition-colors">Support Center</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-6">Resources</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-[#00F0FF] transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#00F0FF] transition-colors">News & Updates</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#00F0FF] transition-colors">EV Calculator</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#00F0FF] transition-colors">Partner Network</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400">
                <i className="fas fa-map-marker-alt text-[#00F0FF]"></i>123 Tech Park, Bangalore 560001
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <i className="fas fa-phone text-[#00F0FF]"></i>+91 98765 43210
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <i className="fas fa-envelope text-[#00F0FF]"></i>support@evlink.com
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">© 2025 EVLINK. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 text-sm hover:text-[#00F0FF] transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 text-sm hover:text-[#00F0FF] transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 text-sm hover:text-[#00F0FF] transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;