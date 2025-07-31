import React, { useState } from 'react';
import { Palette, Music, Trophy, Camera, Book, Heart, Star, Sparkles } from 'lucide-react';

const Activities = () => {
  const [activeTab, setActiveTab] = useState('creative');

  const activities = {
    creative: [
      {
        icon: Palette,
        title: "Bible Art & Crafts",
        description: "Create beautiful artwork inspired by Bible stories using colors, paper, and imagination!",
        image: "🎨",
        difficulty: "Easy"
      },
      {
        icon: Book,
        title: "Story Drawing",
        description: "Draw your favorite Bible characters and scenes while learning amazing stories.",
        image: "📚",
        difficulty: "Easy"
      },
      {
        icon: Camera,
        title: "Drama & Acting",
        description: "Act out Bible stories with friends and express creativity through performance.",
        image: "🎭",
        difficulty: "Medium"
      }
    ],
    music: [
      {
        icon: Music,
        title: "Worship Songs",
        description: "Learn beautiful songs of praise in Hindi, English, and regional languages.",
        image: "🎵",
        difficulty: "Easy"
      },
      {
        icon: Heart,
        title: "Dance & Movement",
        description: "Express joy through traditional Indian dance and contemporary movements.",
        image: "💃",
        difficulty: "Medium"
      },
      {
        icon: Star,
        title: "Instrument Fun",
        description: "Play simple instruments like tabla, keyboard, and create beautiful music together.",
        image: "🥁",
        difficulty: "Medium"
      }
    ],
    games: [
      {
        icon: Trophy,
        title: "Bible Quiz Games",
        description: "Fun quizzes and competitions that make learning Bible stories exciting and memorable.",
        image: "🏆",
        difficulty: "Medium"
      },
      {
        icon: Sparkles,
        title: "Outdoor Adventures",
        description: "Team games, treasure hunts, and outdoor activities that build friendship and faith.",
        image: "🌟",
        difficulty: "Easy"
      },
      {
        icon: Heart,
        title: "Helping Others",
        description: "Special projects to help our community and spread God's love through action.",
        image: "🤝",
        difficulty: "Easy"
      }
    ]
  };

  const tabs = [
    { id: 'creative', label: 'Creative Arts', icon: Palette, color: 'text-purple-600' },
    { id: 'music', label: 'Music & Dance', icon: Music, color: 'text-green-600' },
    { id: 'games', label: 'Games & Fun', icon: Trophy, color: 'text-orange-600' }
  ];

  const testimonials = [
    {
      name: "Arjun",
      age: 8,
      quote: "I love drawing Bible stories! My favorite is David and Goliath. The teachers are so nice and help me make beautiful pictures!",
      activity: "Bible Art & Crafts"
    },
    {
      name: "Priya",
      age: 12,
      quote: "Our dance group is amazing! We perform at church and I feel so happy when we worship God through dance.",
      activity: "Dance & Movement"
    },
    {
      name: "Ravi",
      age: 10,
      quote: "Bible quiz games are my favorite! I've learned so many stories and made lots of new friends here.",
      activity: "Bible Quiz Games"
    }
  ];

  return (
    <section id="activities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-orange-600" />
            <span className="text-sm font-medium text-orange-800">Fun Activities</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-playful font-bold gradient-text mb-6">
            Amazing Things We Do Together!
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Every activity is designed to be fun, educational, and help children grow in their faith 
            while making wonderful friendships.
          </p>
        </div>

        {/* Activity Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <IconComponent className="w-5 h-5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Activities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {activities[activeTab].map((activity, index) => {
            const IconComponent = activity.icon;
            return (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 hover-lift shadow-colorful border border-white/50">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-3">{activity.image}</div>
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-playful font-bold text-gray-900 mb-2 text-center">
                  {activity.title}
                </h3>
                <div className="text-center mb-3">
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                    activity.difficulty === 'Easy' 
                      ? 'bg-green-100 text-green-600' 
                      : activity.difficulty === 'Medium'
                      ? 'bg-yellow-100 text-yellow-600'
                      : 'bg-red-100 text-red-600'
                  }`}>
                    {activity.difficulty}
                  </span>
                </div>
                <p className="text-gray-700 text-center leading-relaxed">
                  {activity.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Testimonials */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-playful font-bold mb-4">
              What Kids Say About Us! 😊
            </h3>
            <p className="text-purple-100 text-lg">Hear from our amazing Scripture Union family</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-purple-100">Age {testimonial.age}</p>
                </div>
                <p className="text-white/90 text-sm italic text-center mb-3 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="text-center">
                  <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                    {testimonial.activity}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl p-8 border border-yellow-200">
            <h3 className="text-2xl md:text-3xl font-playful font-bold text-gray-900 mb-4">
              Ready to Join the Fun? 🎉
            </h3>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              All children are welcome! No experience needed - just bring your enthusiasm and 
              get ready for amazing adventures with friends who care about you.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover-lift"
            >
              Contact Us Today!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;