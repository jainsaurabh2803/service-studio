import React, { useState } from 'react';
import { Linkedin, Mail, Award, Phone, Copy, Check } from 'lucide-react';

const Team = () => {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const teamMembers = [
    {
      name: "Navneet Agarwal",
      position: "Managing Partner",
      expertise: "Financial and Strategic Advisory & Cross-border M&A",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      experience: "12+ years",
      education: "CA, CFA, CMA",
      email: "navneetagarwal511@gmail.com",
      phone: "+91-9916026616"
    },
    {
      name: "Saurabh Jain",
      position: "Senior Partner",
      expertise: "Due Diligence & Financial Analyst",
      image: "saurabh iamge.jpg",
      experience: "7+ years",
      education: "BITS Pilani",
      email: "jainsaurabh1995@gmail.com",
      phone: "+91-7600889240"
    }
  ];

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItem(type);
      setTimeout(() => setCopiedItem(null), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

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
              className="relative group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={member.image}
                  alt={`Team member ${index + 1}`}
                  className="w-full h-80 object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-75"
                />
                
                {/* Overlay with details - appears on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {/* Name and Position */}
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {member.name}
                    </h3>
                    <p className="text-blue-300 font-semibold mb-3 text-lg">
                      {member.position}
                    </p>
                    
                    {/* Expertise */}
                    <p className="text-gray-200 mb-4 text-sm leading-relaxed">
                      {member.expertise}
                    </p>
                    
                    {/* Experience and Education */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <span className="text-blue-300 font-medium text-xs">Experience</span>
                        <p className="text-white text-sm">{member.experience}</p>
                      </div>
                      <div>
                        <span className="text-blue-300 font-medium text-xs">Education</span>
                        <p className="text-white text-sm">{member.education}</p>
                      </div>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-blue-300" />
                        <span className="text-white text-sm flex-1">{member.email}</span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            copyToClipboard(member.email, `email-${index}`);
                          }}
                          className="p-1 hover:bg-white/20 rounded transition-colors"
                          title="Copy email"
                        >
                          {copiedItem === `email-${index}` ? (
                            <Check className="w-3 h-3 text-green-400" />
                          ) : (
                            <Copy className="w-3 h-3 text-gray-300" />
                          )}
                        </button>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-blue-300" />
                        <span className="text-white text-sm flex-1">{member.phone}</span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            copyToClipboard(member.phone, `phone-${index}`);
                          }}
                          className="p-1 hover:bg-white/20 rounded transition-colors"
                          title="Copy phone"
                        >
                          {copiedItem === `phone-${index}` ? (
                            <Check className="w-3 h-3 text-green-400" />
                          ) : (
                            <Copy className="w-3 h-3 text-gray-300" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-3">
                      <button className="p-2 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors">
                        <Linkedin className="w-4 h-4 text-white" />
                      </button>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          window.location.href = `mailto:${member.email}`;
                        }}
                        className="p-2 bg-gray-600 hover:bg-gray-700 rounded-full transition-colors"
                      >
                        <Mail className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Award Badge */}
                <div className="absolute top-4 right-4 bg-blue-600 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Award className="w-4 h-4 text-white" />
                </div>
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