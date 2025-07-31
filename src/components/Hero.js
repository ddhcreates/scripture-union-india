import React from 'react';
import { Sparkles, ArrowRight, Users, BookOpen, Heart } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-300 rounded-full blur-xl opacity-20 animate-bounce-slow"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-pink-300 rounded-full blur-xl opacity-20 animate-pulse-soft"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-blue-300 rounded-full blur-xl opacity-20 animate-bounce-slow" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 right-10 w-16 h-16 bg-green-300 rounded-full blur-xl opacity-20 animate-pulse-soft" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium text-purple-800">Welcome to Scripture Union India - English</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-playful font-bold leading-tight mb-6">
              <span className="gradient-text">Discover</span>{' '}
              <span className="text-gray-900">God's Amazing</span>{' '}
              <span className="gradient-text">Love!</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Join thousands of children across India in exciting Bible adventures, 
              fun activities, and discovering Jesus through stories, games, and friendship!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <button 
                onClick={() => scrollToSection('programs')}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover-lift flex items-center justify-center space-x-2"
              >
                <span>Join the Fun</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="border-2 border-purple-500 text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-purple-50 transition-all duration-300 hover-lift"
              >
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mx-auto mb-2">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-2xl font-bold text-gray-900">50K+</p>
                <p className="text-sm text-gray-600">Children</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mx-auto mb-2">
                  <BookOpen className="w-6 h-6 text-green-600" />
                </div>
                <p className="text-2xl font-bold text-gray-900">25</p>
                <p className="text-sm text-gray-600">States</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-pink-100 rounded-full mx-auto mb-2">
                  <Heart className="w-6 h-6 text-pink-600" />
                </div>
                <p className="text-2xl font-bold text-gray-900">157</p>
                <p className="text-sm text-gray-600">Years</p>
              </div>
            </div>
          </div>

          {/* Right Content - Illustration */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main Illustration Container */}
              <div className="relative w-full h-96 lg:h-[500px]">
                {/* Background Blob */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-400 to-yellow-400 blob opacity-20"></div>
                
                {/* Content Placeholders - Replace with actual images */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full mx-auto mb-4 flex items-center justify-center shadow-xl">
                      <BookOpen className="w-16 h-16 text-white" />
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-8">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-300 to-blue-500 rounded-xl flex items-center justify-center shadow-lg hover-lift">
                        <Heart className="w-8 h-8 text-white" />
                      </div>
                      <div className="w-20 h-20 bg-gradient-to-br from-green-300 to-green-500 rounded-xl flex items-center justify-center shadow-lg hover-lift">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-10 left-10 w-8 h-8 bg-yellow-400 rounded-full animate-bounce-slow shadow-lg"></div>
                <div className="absolute top-20 right-10 w-6 h-6 bg-pink-400 rounded-full animate-pulse-soft shadow-lg"></div>
                <div className="absolute bottom-20 left-5 w-10 h-10 bg-blue-400 rounded-full animate-bounce-slow shadow-lg" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute bottom-10 right-20 w-7 h-7 bg-green-400 rounded-full animate-pulse-soft shadow-lg" style={{animationDelay: '1.5s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;