import React, { useState } from 'react';
import {
  Building,
  Hammer,
  Truck,
  Wrench,
  Calculator,
  Shield,
} from 'lucide-react';

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      icon: Building,
      title: '3D Structural Engineering',
      description: '3D modeling and structural analysis for complex projects.',
      features: ['Structural Analysis', '3D CAD', 'Load Calculations'],
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Hammer,
      title: 'Construction Engineering',
      description: 'From foundation to project completion.',
      features: ['Foundation Design', 'Planning', 'QA'],
      color: 'from-gray-800 to-coral-900',
    },
    {
      icon: Truck,
      title: 'Civil Engineering',
      description: 'Infrastructure and site development services.',
      features: ['Site Dev', 'Roads', 'Utilities'],
      color: 'from-emerald-500 to-emerald-600',
    },
    {
      icon: Wrench,
      title: 'Project Engineering',
      description: 'Scheduling, planning, and resource management.',
      features: ['Planning', 'Resources', 'Timelines'],
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Calculator,
      title: 'Engineering Analysis',
      description: 'Calculations and modeling using advanced tools.',
      features: ['Stress Analysis', 'Modeling', 'Reports'],
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: Shield,
      title: 'Safety Engineering',
      description: 'Safety and code compliance for all phases.',
      features: ['Risk Checks', 'Compliance', 'Inspections'],
      color: 'from-red-500 to-red-600',
    },
  ];

  return (
    <section
      id="services"
      className="py-12 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">
            <span className="text-gray-900">Engineering </span>
            <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-sm text-gray-600 max-w-xl mx-auto">
            Modern solutions powered by engineering, design, and analysis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group relative bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-400 transform ${
                  hoveredCard === index ? 'scale-[1.02]' : ''
                }`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`}
                />
                <div
                  className={`relative z-10 w-10 h-10 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-300 shadow`}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3">{service.description}</p>
                <ul className="space-y-1 mb-3 text-sm text-gray-700">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <div
                        className={`w-1.5 h-1.5 bg-gradient-to-r ${service.color} rounded-full mr-2`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-1.5 text-xs font-medium bg-gradient-to-r ${service.color} text-white rounded-lg opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300`}
                >
                  Learn More
                </button>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button className="group relative px-5 py-2 text-xs font-semibold bg-gradient-to-r from-blue-600 to-emerald-500 text-white rounded-lg hover:scale-105 transition-transform duration-300 shadow">
            <span className="relative z-10">Get Engineering Consultation</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-emerald-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
