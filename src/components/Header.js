import React, { useState } from 'react';
import { Menu, X, Heart, Star } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-purple-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
                <img 
                    src="/logo.png" 
                    alt="Scripture Union India Logo" 
                    className="w-10 h-10 rounded-full object-cover"
                />
                <Star className="w-4 h-4 text-yellow-400 absolute -top-1 -right-1 animate-pulse" />
                </div>
            <div>
              <h1 className="font-playful font-bold text-xl gradient-text">SU India</h1>
              <p className="text-xs text-gray-500 font-medium">Scripture Union</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('programs')}
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
            >
              Programs
            </button>
            <button 
              onClick={() => scrollToSection('activities')}
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
            >
              Activities
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-300 hover-lift"
            >
              Contact
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-purple-50 text-purple-600"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2 bg-white rounded-lg shadow-lg mt-2 border border-purple-100">
            <button 
              onClick={() => scrollToSection('home')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('programs')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors"
            >
              Programs
            </button>
            <button 
              onClick={() => scrollToSection('activities')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors"
            >
              Activities
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium mx-4 my-2"
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;