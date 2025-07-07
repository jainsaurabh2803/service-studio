import React from 'react';
import { Building, Search, Calculator, FileText, Handshake, BarChart3 } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Building className="w-8 h-8" />,
      title: "Sell-Side Advisory",
      description: "Strategic guidance for business owners looking to sell their companies, maximizing value and ensuring smooth transitions.",
      features: ["Business Valuation", "Market Positioning", "Buyer Identification", "Negotiation Support"]
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Buy-Side Advisory",
      description: "Comprehensive support for companies seeking strategic acquisitions to expand market presence and capabilities.",
      features: ["Target Identification", "Due Diligence", "Deal Structuring", "Integration Planning"]
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "Business Valuation",
      description: "Professional valuation services using industry-standard methodologies for accurate business assessment.",
      features: ["DCF Analysis", "Comparable Analysis", "Asset Valuation", "Fair Value Opinions"]
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Due Diligence",
      description: "Thorough investigation and analysis of target companies to identify risks and opportunities.",
      features: ["Financial Analysis", "Legal Review", "Operational Assessment", "Market Analysis"]
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Strategic Partnerships",
      description: "Facilitating strategic alliances and joint ventures to create synergistic business relationships.",
      features: ["Partnership Structuring", "Alliance Strategy", "Joint Venture Setup", "Strategic Planning"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Corporate Restructuring",
      description: "Expert guidance on organizational restructuring to optimize operations and create shareholder value.",
      features: ["Spin-offs", "Carve-outs", "Divestitures", "Reorganization"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive M&A Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From strategic planning to deal execution, we provide end-to-end merger and acquisition 
            services tailored to the Indian business landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="text-blue-600 mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;