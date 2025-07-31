import React from 'react';
import { Target, Globe, Users, BookOpen, Heart, Star } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-4 py-2 mb-6">
            <Heart className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-800">About Scripture Union India</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-playful font-bold gradient-text mb-6">
            Our Amazing Mission
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            For over 150 years, Scripture Union has been helping children and families 
            meet God through the Bible and prayer, growing in faith and love.
          </p>
        </div>

        {/* Mission Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 hover-lift shadow-colorful">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-playful font-bold text-gray-900">Our Mission</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To make God's Good News known to children, young people and families across India. 
              We believe every child deserves to know about Jesus' love through fun, engaging, 
              and age-appropriate activities.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 hover-lift shadow-colorful">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-playful font-bold text-gray-900">Our Vision</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To encourage people of all ages to meet God daily through the Bible and prayer, 
              growing in Christian maturity and becoming committed servants of a world in need.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-8 md:p-12 text-white mb-16">
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-playful font-bold mb-4">Our Core Values</h3>
            <p className="text-purple-100 text-lg">What makes Scripture Union India special</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2">Love in Action</h4>
              <p className="text-purple-100">Showing Christ's love through every interaction with children and families.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2">Bible Centered</h4>
              <p className="text-purple-100">Making God's Word accessible and exciting for children of all ages.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-2">Community Focus</h4>
              <p className="text-purple-100">Building strong Christian communities that support and nurture growth.</p>
            </div>
          </div>
        </div>

        {/* Global Connection */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-100 to-blue-100 rounded-full px-4 py-2 mb-6">
              <Globe className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-green-800">Global Network</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-playful font-bold text-gray-900 mb-6">
              Part of Something <span className="gradient-text">Bigger</span>
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Scripture Union India is part of a global family operating in over 120 countries worldwide. 
              Since 1867, we've been introducing children, young people, and families to Jesus Christ.
            </p>
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <p className="text-3xl font-bold gradient-text">120+</p>
                <p className="text-sm text-gray-600">Countries</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold gradient-text">157</p>
                <p className="text-sm text-gray-600">Years</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold gradient-text">Millions</p>
                <p className="text-sm text-gray-600">Lives Touched</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-yellow-200 via-pink-200 to-purple-300 rounded-3xl p-8 blob">
              <div className="text-center">
                <Globe className="w-24 h-24 text-purple-600 mx-auto mb-4" />
                <h4 className="text-2xl font-playful font-bold text-gray-900 mb-2">Connected Worldwide</h4>
                <p className="text-gray-700">
                  Indian children connect with peers globally, sharing God's love across cultures and continents.
                </p>
                <div className="flex justify-center space-x-2 mt-4">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <Star className="w-5 h-5 text-yellow-500" />
                  <Star className="w-5 h-5 text-yellow-500" />
                  <Star className="w-5 h-5 text-yellow-500" />
                  <Star className="w-5 h-5 text-yellow-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;