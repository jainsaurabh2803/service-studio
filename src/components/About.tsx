import React from 'react';
import { Award, Globe, Users, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                India's Premier M&A Advisory Firm
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                With over 15 years of experience in the Indian market, M&A Partners India has established 
                itself as the trusted advisor for strategic corporate transactions. We combine deep local 
                market knowledge with international best practices to deliver exceptional results.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our team of seasoned professionals has successfully closed over 250 deals worth more than 
                ₹50 billion, spanning across all major industries and business sizes - from emerging startups 
                to established multinational corporations.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <Award className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Excellence Recognition</h3>
                <p className="text-sm text-gray-600">
                  Multiple industry awards for outstanding M&A advisory services
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <Globe className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Global Network</h3>
                <p className="text-sm text-gray-600">
                  International partnerships enabling cross-border transactions
                </p>
              </div>
            </div>
          </div>

          {/* Right column - Image and stats */}
          <div className="space-y-6">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional business meeting"
                className="rounded-2xl shadow-lg w-full h-64 object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">250+</div>
                    <div className="text-sm text-gray-600">Successful Deals</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the catalyst for strategic growth in Indian businesses by providing world-class 
                M&A advisory services that create lasting value for all stakeholders.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">₹50B+</div>
                <div className="text-sm text-gray-600">Deal Value</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">95%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;