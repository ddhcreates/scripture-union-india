import React from 'react';
import { Heart, Globe, Phone, Mail, MapPin, Star } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Heart className="w-7 h-7 text-white" />
                </div>
                <Star className="w-4 h-4 text-yellow-400 absolute -top-1 -right-1 animate-pulse" />
              </div>
              <div>
                <h3 className="font-playful font-bold text-2xl gradient-text">Scripture Union India</h3>
                <p className="text-purple-200 text-sm">Spreading God's Love Since 1867</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Making God's Good News known to children, young people and families across India. 
              Encouraging daily encounters with God through the Bible and prayer.
            </p>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-purple-200">
                <Globe className="w-4 h-4" />
                <span className="text-sm">Part of Scripture Union Global - 120+ Countries</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-purple-100">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Our Programs
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('activities')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Activities
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <a 
                  href="https://scriptureunion.global" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  SU Global
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-purple-100">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-purple-400" />
                <div>
                  <p className="text-sm text-gray-300">044-26740137</p>
                  <p className="text-xs text-gray-400">Mon-Fri: 9 AM - 6 PM</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-purple-400" />
                <div>
                  <p className="text-sm text-gray-300">scriptureunionindia@gmail.com</p>
                  <p className="text-xs text-gray-400">We reply within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-purple-400" />
                <div>
                  <p className="text-sm text-gray-300">Chennai, Tamil Nadu</p>
                  <p className="text-xs text-gray-400">India</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="border-t border-purple-800 mt-8 pt-8">
          <div className="bg-gradient-to-r from-purple-800/50 to-pink-800/50 rounded-xl p-6 backdrop-blur-sm">
            <h4 className="font-playful font-bold text-xl text-center mb-3 text-purple-100">
              Our Mission 🌟
            </h4>
            <p className="text-center text-gray-300 leading-relaxed max-w-4xl mx-auto">
              To make God's Good News known to children, young people and families. 
              To encourage people of all ages to meet God daily through the Bible and prayer 
              so that they may come to personal faith in our Lord Jesus Christ, grow in Christian maturity 
              and become both committed church members and servants of a world in need.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-purple-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {currentYear} Scripture Union India. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Part of Scripture Union International family since 1867
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-center">
                <p className="text-lg font-bold text-purple-300">50K+</p>
                <p className="text-xs text-gray-400">Children Reached</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold text-purple-300">25</p>
                <p className="text-xs text-gray-400">States</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold text-purple-300">157</p>
                <p className="text-xs text-gray-400">Years Legacy</p>
              </div>
            </div>
          </div>
        </div>

        {/* Final Message */}
        <div className="text-center mt-6 pt-6 border-t border-purple-800">
          <p className="text-purple-200 text-sm font-medium">
            ✨ Made with love for children across India ✨
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;