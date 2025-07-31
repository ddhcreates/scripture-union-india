import React from 'react';
import { BookOpen, Users, Gamepad2, Music, Camera, MapPin, Calendar, Clock } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      icon: BookOpen,
      title: "Bible Discovery",
      age: "Ages 4-8",
      description: "Fun Bible stories with colorful pictures, simple activities, and interactive games that bring God's word to life!",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50"
    },
    {
      icon: Users,
      title: "Friendship Groups",
      age: "Ages 9-14",
      description: "Weekly gatherings where children make friends, discuss Bible stories, and participate in exciting group activities.",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50"
    },
    {
      icon: Music,
      title: "Worship & Music",
      age: "All Ages",
      description: "Learn beautiful songs, play simple instruments, and express love for God through music and dance.",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50"
    },
    {
      icon: Gamepad2,
      title: "Fun & Games",
      age: "Ages 5-14",
      description: "Outdoor games, puzzles, crafts, and team activities that teach important values while having amazing fun!",
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50"
    },
    {
      icon: Camera,
      title: "Creative Arts",
      age: "Ages 6-14",
      description: "Drawing, painting, storytelling, drama, and creative projects that help children express their faith artistically.",
      color: "from-indigo-500 to-purple-500",
      bgColor: "from-indigo-50 to-purple-50"
    },
    {
      icon: MapPin,
      title: "Adventure Camps",
      age: "Ages 8-14",
      description: "Special holiday camps with outdoor adventures, team challenges, and unforgettable experiences with friends.",
      color: "from-teal-500 to-green-500",
      bgColor: "from-teal-50 to-green-50"
    }
  ];

  const schedule = [
    { day: "Sunday", time: "10:00 AM", activity: "Family Worship", location: "Main Hall" },
    { day: "Wednesday", time: "4:00 PM", activity: "Bible Discovery (Ages 4-8)", location: "Children's Room" },
    { day: "Friday", time: "5:00 PM", activity: "Friendship Groups (Ages 9-14)", location: "Youth Center" },
    { day: "Saturday", time: "9:00 AM", activity: "Creative Arts Workshop", location: "Art Studio" }
  ];

  return (
    <section id="programs" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full px-4 py-2 mb-6">
            <Gamepad2 className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-medium text-purple-800">Our Amazing Programs</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-playful font-bold gradient-text mb-6">
            Fun Activities for Everyone!
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join us for exciting programs designed especially for Indian children. 
            Every activity is filled with joy, learning, and God's love!
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {programs.map((program, index) => {
            const IconComponent = program.icon;
            return (
              <div 
                key={index}
                className={`bg-gradient-to-br ${program.bgColor} rounded-2xl p-6 hover-lift shadow-colorful border border-white/50`}
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${program.color} rounded-xl flex items-center justify-center mb-4`}>
                  <IconComponent className="w-7 h-7 text-white" />
                </div>
                <div className="mb-2">
                  <h3 className="text-xl font-playful font-bold text-gray-900">{program.title}</h3>
                  <span className="text-sm font-medium text-purple-600 bg-purple-100 px-2 py-1 rounded-full">
                    {program.age}
                  </span>
                </div>
                <p className="text-gray-700 leading-relaxed">{program.description}</p>
              </div>
            );
          })}
        </div>

        {/* Weekly Schedule */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-colorful">
          <div className="text-center mb-10">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-100 to-blue-100 rounded-full px-4 py-2 mb-4">
              <Calendar className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-green-800">Weekly Schedule</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-playful font-bold gradient-text mb-4">
              When We Meet
            </h3>
            <p className="text-gray-600 text-lg">Join us throughout the week for different activities!</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {schedule.map((item, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-purple-100">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-lg font-bold text-gray-900">{item.day}</h4>
                  <div className="flex items-center space-x-1 text-purple-600">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-medium">{item.time}</span>
                  </div>
                </div>
                <p className="text-gray-800 font-medium mb-2">{item.activity}</p>
                <div className="flex items-center space-x-1 text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{item.location}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-xl p-6 border border-yellow-200">
              <h4 className="text-xl font-playful font-bold text-gray-900 mb-2">
                🎉 Special Events Every Month!
              </h4>
              <p className="text-gray-700">
                Look out for our monthly festivals, celebration days, and special guest programs. 
                Every month brings new surprises and adventures!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;