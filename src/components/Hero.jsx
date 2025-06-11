import React, { useState, useEffect } from 'react';
import { ChevronDown, Phone, Menu, X } from 'lucide-react';
import CountUp from 'react-countup';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-500 to-emerald-400 rounded-lg transform rotate-45 animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.5}px) rotate(45deg)` }} />
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full animate-bounce"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }} />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 flex items-center justify-between p-6 bg-white/10 backdrop-blur-md">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">RC</span>
          </div>
          <div className="flex flex-col">
            <span className="text-white font-semibold text-lg">RANDY COLEMAN</span>
            <span className="text-white/80 text-sm">ENGINEERING SERVICES</span>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6 text-sm">
          {['services', 'portfolio', 'team', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => scrollTo(section)}
              className="text-white/80 hover:text-white transition-colors duration-300 capitalize cursor-pointer"
            >
              {section}
            </button>
          ))}
          <span className="text-white/80 ml-6 hidden lg:block">info@randycoleman.com</span>
        </div>

        {/* Mobile Icons */}
        <div className="flex items-center space-x-3 md:hidden">
          <Phone className="w-5 h-5 text-white/60" />
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/10 backdrop-blur-md px-6 py-4 space-y-3 text-white">
          {['services', 'portfolio', 'team', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => scrollTo(section)}
              className="block w-full text-left text-white/90 hover:text-white cursor-pointer"
            >
              {section}
            </button>
          ))}
          <div className="text-sm text-white/80">Email: info@randycoleman.com</div>
        </div>
      )}

      {/* Hero Content */}
      <div className="relative z-20 flex items-center justify-center min-h-screen px-6 text-center">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Engineering<br />
            <span className="bg-gradient-to-r from-orange-400 to-emerald-400 bg-clip-text text-transparent">
              Excellence
            </span>
          </h1>
          <p className="text-base md:text-lg text-white/80 mb-10">
            Randy Coleman Engineering Services delivers next-generation construction solutions with
            innovative 3D modeling, sustainable engineering practices, and cutting-edge technology integration.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-14">
            <button
              onClick={() => scrollTo('contact')}
              className="px-6 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition cursor-pointer"
            >
              Free Consultation
            </button>
            <button
              onClick={() => scrollTo('portfolio')}
              className="px-6 py-3 border border-white/30 text-white rounded-lg hover:bg-white/10 transition cursor-pointer"
            >
              View Portfolio
            </button>
          </div>

          {/* Stats with animation */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatBlock number={750} label="Projects" color="emerald" />
            <StatBlock number={25} label="Years Experience" color="orange" />
            <StatBlock number={99} label="Client Satisfaction (%)" color="blue" />
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-white/60" />
      </div>
    </div>
  );
};

const StatBlock = ({ number, label, color }) => {
  const colorMap = {
    emerald: 'text-emerald-400',
    orange: 'text-orange-400',
    blue: 'text-blue-400',
  };
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 hover:bg-white/20 transition">
      <div className={`text-3xl font-bold mb-2 ${colorMap[color]}`}>
        <CountUp end={number} duration={2} />
        {label.includes('%') ? '' : '+'}
      </div>
      <div className="text-white/80 text-sm">{label}</div>
    </div>
  );
};

export default Hero;