import React from 'react';
import { Mail, Phone, MapPin, Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white py-12 px-4 lg:px-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2">
          <div className="flex items-center mb-4">
            <span className="w-48 text-xl font-bold bg-gradient-to-r from-[#795EF6] to-[#F8A588] bg-clip-text text-transparent">
            <img src="/NusterLogo.svg" alt="" />
            </span>
          </div>
          <p className="text-gray-400 text-sm mt-2">Empowering your business with intelligent AI agents and cutting-edge SaaS solutions.</p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-[#795EF6] transition-colors">Home</a></li>
            <li><a href="#" className="text-gray-400 hover:text-[#795EF6] transition-colors">Solutions</a></li>
            <li><a href="#" className="text-gray-400 hover:text-[#795EF6] transition-colors">AI Agents</a></li>
            <li><a href="#" className="text-gray-400 hover:text-[#795EF6] transition-colors">Pricing</a></li>
            <li><a href="#" className="text-gray-400 hover:text-[#795EF6] transition-colors">About</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Solutions</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-[#795EF6] transition-colors">AI Agents</a></li>
            <li><a href="#" className="text-gray-400 hover:text-[#795EF6] transition-colors">Process Automation</a></li>
            <li><a href="#" className="text-gray-400 hover:text-[#795EF6] transition-colors">Data Analysis</a></li>
            <li><a href="#" className="text-gray-400 hover:text-[#795EF6] transition-colors">Cloud Integration</a></li>
            <li><a href="#" className="text-gray-400 hover:text-[#795EF6] transition-colors">Custom Development</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <Mail className="w-5 h-5 text-[#795EF6] mt-1" />
              <span className="ml-3 text-gray-400">HR@Nusterai.com</span>
            </li>
            <li className="flex items-start">
              <Phone className="w-5 h-5 text-[#795EF6] mt-1" />
              <span className="ml-3 text-gray-400">+1 (201) 320-9291</span>
            </li>
            <li className="flex items-start">
              <MapPin className="w-40 h-5 text-[#795EF6] mt-1" />
              <span className="ml-3 text-gray-400">CKOD-23, Survey No-192, 4th Floor, Sark House, Kondapur Village, Serilingampally Mandal, GHMC, Rangareddy District, Hyderabad -500084, Telangana.</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Nuster AI. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <a href="#" className="text-gray-400 hover:text-[#795EF6] transition-colors text-sm">Privacy Policy</a>
          <a href="#" className="text-gray-400 hover:text-[#795EF6] transition-colors text-sm">Terms of Service</a>
          <a href="#" className="text-gray-400 hover:text-[#795EF6] transition-colors text-sm">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;