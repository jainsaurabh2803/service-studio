import React from 'react';
import { Cpu, Heart, Factory, ShoppingCart, Car, Smartphone, Landmark, Zap } from 'lucide-react';

const Industries = () => {
  const industries = [
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Technology & IT",
      description: "Software, SaaS, fintech, and emerging technology companies",
      growth: "+25% YoY"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Healthcare & Pharma",
      description: "Pharmaceuticals, biotechnology, and healthcare services",
      growth: "+18% YoY"
    },
    {
      icon: <Factory className="w-8 h-8" />,
      title: "Manufacturing",
      description: "Automotive, textiles, chemicals, and industrial equipment",
      growth: "+15% YoY"
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Consumer Goods",
      description: "FMCG, retail, food & beverage, and consumer electronics",
      growth: "+20% YoY"
    },
    // {
    //   icon: <Car className="w-8 h-8" />,
    //   title: "Transportation",
    //   description: "Logistics, shipping, railways, and mobility solutions",
    //   growth: "+22% YoY"
    // },
    // {
    //   icon: <Smartphone className="w-8 h-8" />,
    //   title: "Telecommunications",
    //   description: "Telecom services, infrastructure, and digital solutions",
    //   growth: "+12% YoY"
    // },
    {
      icon: <Landmark className="w-8 h-8" />,
      title: "Financial Services",
      description: "Banking, insurance, asset management, and fintech",
      growth: "+16% YoY"
    }
    // {
    //   icon: <Zap className="w-8 h-8" />,
    //   title: "Energy & Utilities",
    //   description: "Renewable energy, oil & gas, and utility services",
    //   growth: "+30% YoY"
    // }
  ];

  return (
    <section id="industries" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Industry Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Deep sector knowledge across India's fastest-growing industries, enabling us to provide 
            specialized insights and strategic guidance for your M&A transactions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group bg-gray-50 hover:bg-blue-50 rounded-xl p-6 transition-all duration-300 border border-gray-200 hover:border-blue-300"
            >
              <div className="text-blue-600 group-hover:text-blue-700 mb-4">
                {industry.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {industry.title}
              </h3>
              <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                {industry.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">Market Growth</span>
                <span className="text-sm font-semibold text-green-600">
                  {industry.growth}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Don't See Your Industry?
              </h3>
              <p className="text-blue-100 mb-6">
                We work across all sectors of the Indian economy. Our adaptable approach 
                and extensive network enable us to serve businesses in any industry.
              </p>
              <button className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold transition-all">
                Discuss Your Sector
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-200">50+</div>
                <div className="text-sm text-blue-300">Industries Served</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-200">90%</div>
                <div className="text-sm text-blue-300">Success Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-200">28</div>
                <div className="text-sm text-blue-300">States Covered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-200">500+</div>
                <div className="text-sm text-blue-300">Client Network</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;