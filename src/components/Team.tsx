import React from 'react';
import { Linkedin, Mail, Award } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Navneet Agarwal",
      position: "Managing Partner",
      expertise: "Financial and Strategic Advisory & Cross-border M&A",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      experience: "12+ years",
      education: "CA, CFA, CMA"
    },
    {
      name: "Saurabh Jain",
      position: "Senior Partner",
      expertise: "Due Diligence & Financial Analyst",
      image: "saurabh iamge.jpg",
      experience: "7+ years",
      education: "BITS Pilani"
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Leadership Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our experienced professionals bring decades of combined expertise in mergers, acquisitions, 
            and strategic advisory services across the Indian market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 group"
            >
              <div className="relative mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute -bottom-2 -right-2 bg-blue-600 p-2 rounded-full">
                  <Award className="w-4 h-4 text-white" />
                </div>
              </div>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                {member.name}
              </h3>
              <p className="text-blue-600 font-medium mb-3 text-lg">
                {member.position}
              </p>
              <p className="text-gray-600 mb-4">
                {member.expertise}
              </p>
              
              <div className="space-y-2 mb-6">
                <div className="text-gray-700">
                  <span className="font-medium">Experience:</span> {member.experience}
                </div>
                <div className="text-gray-700">
                  <span className="font-medium">Education:</span> {member.education}
                </div>
              </div>

              <div className="flex justify-center gap-3">
                <button className="p-3 bg-blue-100 hover:bg-blue-200 rounded-full transition-colors">
                  <Linkedin className="w-5 h-5 text-blue-600" />
                </button>
                <button className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
                  <Mail className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Join Our Expert Team
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We're always looking for exceptional talent to join our growing team. 
              Explore opportunities to work with India's leading M&A advisory firm.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all">
              View Career Opportunities
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
