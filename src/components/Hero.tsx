import React from 'react';
import { ArrowRight, TrendingUp, Shield, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.1%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Strategic M&A
                <span className="block text-blue-300">Advisory Services</span>
                <span className="block text-2xl md:text-3xl lg:text-4xl font-normal text-blue-200">
                  for India
                </span>
              </h1>
              <p className="text-lg md:text-xl text-blue-100 max-w-lg">
                Empowering Indian businesses through strategic mergers, acquisitions, and partnerships. 
                Your trusted advisor for transformative corporate growth.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-2">
                Get Strategic Consultation
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-all">
                View Our Success Stories
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-300">250+</div>
                <div className="text-sm text-blue-200">Deals Closed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-300">₹50B+</div>
                <div className="text-sm text-blue-200">Deal Value</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-300">15+</div>
                <div className="text-sm text-blue-200">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right column - Features */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-blue-300/20">
              <div className="flex items-start gap-4">
                <div className="bg-blue-500 p-3 rounded-xl">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-100">Growth Strategy</h3>
                  <p className="text-blue-200 text-sm mt-1">
                    Strategic acquisitions and partnerships to accelerate business growth
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-blue-300/20">
              <div className="flex items-start gap-4">
                <div className="bg-green-500 p-3 rounded-xl">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-100">Risk Mitigation</h3>
                  <p className="text-blue-200 text-sm mt-1">
                    Comprehensive due diligence and risk assessment services
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-blue-300/20">
              <div className="flex items-start gap-4">
                <div className="bg-purple-500 p-3 rounded-xl">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-100">Expert Team</h3>
                  <p className="text-blue-200 text-sm mt-1">
                    Seasoned professionals with deep Indian market expertise
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;