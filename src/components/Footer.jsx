import React, { useState } from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight,
  Building,
  Award,
  Users,
  Clock
} from 'lucide-react';

const Footer = () => {
  const [hoveredSocial, setHoveredSocial] = useState(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', newsletterEmail);
    setNewsletterEmail('');
  };

  const socialLinks = [
    { icon: Facebook, name: 'Facebook', color: 'hover:text-blue-500' },
    { icon: Twitter, name: 'Twitter', color: 'hover:text-blue-400' },
    { icon: Instagram, name: 'Instagram', color: 'hover:text-pink-500' },
    { icon: Linkedin, name: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: Youtube, name: 'YouTube', color: 'hover:text-red-500' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-lg flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">RC</span>
                </div>
                {/* Animated Engineering Tool */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-500 rounded transform rotate-45 hover:rotate-90 transition-transform duration-500">
                  <div className="absolute top-1 left-1 w-1 h-3 bg-gray-700 rounded-sm" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg leading-tight">RANDY COLEMAN</span>
                <span className="text-gray-300 text-sm font-medium leading-tight">ENGINEERING SERVICES</span>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading engineering and construction services with innovative 3D technology, 
              sustainable practices, and exceptional engineering expertise since 1999.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center p-3 bg-white/5 rounded-lg">
                <div className="text-lg font-bold text-emerald-400">750+</div>
                <div className="text-xs text-gray-400">Projects</div>
              </div>
              <div className="text-center p-3 bg-white/5 rounded-lg">
                <div className="text-lg font-bold text-blue-400">25+</div>
                <div className="text-xs text-gray-400">Years</div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-coral-400" />
                <span className="text-gray-300 text-sm">1-800-COLEMAN</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-coral-400" />
                <span className="text-gray-300 text-sm">info@randycoleman.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-coral-400" />
                <span className="text-gray-300 text-sm">456 Engineering Plaza, Coleman City</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Engineering Services</h3>
            <ul className="space-y-3">
              {[
                'Structural Engineering',
                'Civil Engineering',
                'Construction Engineering',
                'Project Management',
                '3D Design & Analysis',
                'Safety & Compliance'
              ].map((service, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Industries</h3>
            <ul className="space-y-3">
              {[
                'Residential Development',
                'Commercial Buildings',
                'Industrial Facilities',
                'Infrastructure Projects',
                'Municipal Engineering',
                'Transportation Systems'
              ].map((industry, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm flex items-center group"
                  >
                    <Building className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                    {industry}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Stay Updated</h3>
            <p className="text-gray-300 text-sm mb-4">
              Get the latest engineering news, 3D technology updates, and project showcases from Randy Coleman Engineering.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="mb-6">
              <div className="flex">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-r-lg hover:from-blue-700 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>

            {/* Certifications */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-white">Certifications</h4>
              <div className="flex space-x-2">
                <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center">
                  <Award className="w-4 h-4 text-white" />
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <div className="w-8 h-8 bg-orange-600 rounded flex items-center justify-center">
                  <Clock className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="text-xs text-gray-400">
                PE Licensed • LEED AP • PMP Certified
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 pb-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Social Media */}
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <span className="text-gray-400 text-sm mr-2">Follow us:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href="#"
                    className={`w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-110 hover:bg-white/20`}
                    onMouseEnter={() => setHoveredSocial(index)}
                    onMouseLeave={() => setHoveredSocial(null)}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © 2024 Randy Coleman Engineering Services. All rights reserved.
              </p>
              <div className="flex items-center justify-center md:justify-end space-x-4 mt-2">
                <a href="#" className="text-gray-400 hover:text-white text-xs transition-colors duration-300">
                  Privacy Policy
                </a>
                <span className="text-gray-600">•</span>
                <a href="#" className="text-gray-400 hover:text-white text-xs transition-colors duration-300">
                  Terms of Service
                </a>
                <span className="text-gray-600">•</span>
                <a href="#" className="text-gray-400 hover:text-white text-xs transition-colors duration-300">
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Back to Top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-full flex items-center justify-center text-white hover:from-blue-700 hover:to-emerald-600 transition-all duration-300 transform hover:scale-110 shadow-2xl z-50"
        >
          <ArrowRight className="w-5 h-5 transform -rotate-90" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;