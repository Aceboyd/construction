import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

import rob from '../assets/image/rob.jpg';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Robert Chen",
      role: "Development Director",
      company: "Metro Development Group",
      image: rob,
      rating: 5,
      testimonial: "Randy Coleman Engineering delivered exceptional structural engineering for our 45-story tower. Their 3D modeling and analysis capabilities are unmatched.",
      project: "Metro Tower - 45 floors",
      completion: "2024"
    },
    {
      id: 2,
      name: "Maria Rodriguez",
      role: "Project Manager",
      company: "Hillside Residential",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg",
      rating: 5,
      testimonial: "The foundation work for our luxury project was flawless. Randy’s team provided innovative solutions and showed outstanding attention to detail.",
      project: "Hillside Estates - 85 units",
      completion: "2023"
    },
    {
      id: 3,
      name: "James Patterson",
      role: "Infrastructure Director",
      company: "State Transportation Dept",
      image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg",
      rating: 5,
      testimonial: "The bridge design and traffic solutions were innovative and cost-effective. Randy Coleman Engineering exceeded expectations throughout.",
      project: "Interstate Bridge - 2.5 miles",
      completion: "2024"
    },
    {
      id: 4,
      name: "Dr. Susan Walsh",
      role: "Facilities Director",
      company: "University Medical Center",
      image: "https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg",
      rating: 5,
      testimonial: "Their structural expertise brought our medical center to life. The team delivered with precision, using advanced modeling tools and engineering insight.",
      project: "Medical Center - 8 floors",
      completion: "2023"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentTestimonial];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-white">
            Client <span className="bg-gradient-to-r from-orange-400 to-green-400 bg-clip-text text-transparent">Testimonials</span>
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
            Real results from trusted partners in civil, structural, and foundation engineering.
          </p>
        </div>

        <div className="relative">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-10 mb-8">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div className="space-y-4">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-green-500 rounded-full flex items-center justify-center">
                  <Quote className="w-5 h-5 text-white" />
                </div>

                <div className="flex items-center space-x-1">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                <blockquote className="text-sm md:text-base text-white leading-relaxed italic">
                  "{current.testimonial}"
                </blockquote>

                <div className="text-xs text-gray-400">
                  <p><strong>{current.project}</strong> — Completed {current.completion}</p>
                </div>
              </div>

              <div className="flex items-center md:justify-end space-x-4">
                <img
                  src={current.image}
                  alt={current.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-white/20"
                />
                <div>
                  <h4 className="text-white font-bold text-sm">{current.name}</h4>
                  <p className="text-gray-300 text-sm">{current.role}</p>
                  <p className="text-gray-400 text-xs">{current.company}</p>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={prevTestimonial}
            aria-label="Previous Testimonial"
            className="absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          <button
            onClick={nextTestimonial}
            aria-label="Next Testimonial"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>

        <div className="flex justify-center space-x-4 mt-6">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => setCurrentTestimonial(index)}
              aria-label={`View testimonial from ${testimonial.name}`}
              className={`relative w-12 h-12 rounded-full overflow-hidden border-2 transition-all duration-300 ${
                index === currentTestimonial
                  ? 'border-orange-400 scale-105'
                  : 'border-white/30 hover:border-white/50'
              }`}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mt-12">
          <div>
            <div className="text-2xl font-semibold text-green-400">750+</div>
            <div className="text-sm text-gray-300">Happy Clients</div>
          </div>
          <div>
            <div className="text-2xl font-semibold text-orange-400">4.9/5</div>
            <div className="text-sm text-gray-300">Rating</div>
          </div>
          <div>
            <div className="text-2xl font-semibold text-blue-400">99%</div>
            <div className="text-sm text-gray-300">Project Success</div>
          </div>
          <div>
            <div className="text-2xl font-semibold text-yellow-400">25+</div>
            <div className="text-sm text-gray-300">Industry Awards</div>
          </div>
        </div>

        <div className="text-center mt-14">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-blue-600 to-emerald-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-emerald-600 transition-all duration-300"
          >
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
