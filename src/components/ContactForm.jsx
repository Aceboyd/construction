// import React, { useState } from 'react';
// import emailjs from '@emailjs/browser';
// import { Send, Phone, Mail, MapPin, Clock, CheckCircle, User, Building } from 'lucide-react';

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     company: '',
//     projectType: '',
//     budget: '',
//     timeline: '',
//     message: ''
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [errorMessage, setErrorMessage] = useState(null);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setErrorMessage(null);

//     const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
//     const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
//     const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

//     console.log('Service ID:', serviceId);
//     console.log('Template ID:', templateId);
//     console.log('Public Key:', publicKey);
//     console.log('All env variables:', import.meta.env);

//     if (!serviceId || !templateId || !publicKey) {
//       setIsSubmitting(false);
//       setErrorMessage('Configuration error. Please contact support.');
//       setTimeout(() => setErrorMessage(null), 5000);
//       return;
//     }

//     try {
//       const result = await emailjs.sendForm(serviceId, templateId, e.target, publicKey);
//       console.log('Email sent:', result.text);
//       setIsSubmitting(false);
//       setIsSubmitted(true);
      
//       setTimeout(() => {
//         setIsSubmitted(false);
//         setFormData({
//           name: '',
//           email: '',
//           phone: '',
//           company: '',
//           projectType: '',
//           budget: '',
//           timeline: '',
//           message: ''
//         });
//       }, 3000);
//     } catch (error) {
//       console.error('EmailJS error:', error);
//       setIsSubmitting(false);
//       setErrorMessage('Failed to send message. Please try again.');
//       setTimeout(() => setErrorMessage(null), 5000);
//     }
//   };

//   return (
    
//   );
// };

// export default ContactForm;









import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, User, Building, CheckCircle, Send } from 'lucide-react';

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          access_key: '3e4e6208-fd63-48c2-b4ca-207fff6dd226',
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          projectType: '',
          budget: '',
          timeline: '',
          message: ''
        });
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        setErrorMessage('Failed to send message. Please try again.');
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-10 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gray-900">Start Your </span>
            <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
              Engineering Project
            </span>
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Ready to bring your engineering vision to life? Contact Randy Coleman Engineering Services 
            for a free consultation and detailed project assessment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-blue-600 to-emerald-500 rounded-xl p-6 text-white h-full">
              <h3 className="text-lg font-bold mb-6">Get In Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Phone</h4>
                    <p className="text-white/80 text-sm">1-800-COLEMAN</p>
                    <p className="text-white/80 text-sm">(1-800-265-3626)</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Email</h4>
                    <p className="text-white/80 text-sm">info@randycolemanengr.com</p>
                    <p className="text-white/80 text-sm">engineering@randycoleman.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Address</h4>
                    <p className="text-white/80 text-sm">39 Taylor St</p>
                    <p className="text-white/80 text-sm">San Francisco, CA 94102</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Business Hours</h4>
                    <p className="text-white/80 text-sm">Mon - Fri: 7:00 AM - 6:00 PM</p>
                    <p className="text-white/80 text-sm">Sat: 8:00 AM - 4:00 PM</p>
                    <p className="text-white/80 text-sm">Sun: Emergency Only</p>
                  </div>
                </div>
              </div>

              {/* 3D Engineer Animation */}
              <div className="mt-6 text-center">
                <div className="relative inline-block">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 animate-bounce">
                    <User className="w-8 h-8" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center animate-pulse">
                    <Building className="w-3 h-3 text-gray-800" />
                  </div>
                </div>
                <p className="text-white/80 text-xs">Randy Coleman Engineering is ready to help!</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-xl p-6">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                    <CheckCircle className="w-8 h-8 text-emerald-500" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Thank You!</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Your message has been sent to our team. We'll contact you within 24 hours.
                  </p>
                  <div className="text-xs text-gray-500">
                    Redirecting back to form...
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="hidden"
                    name="access_key"
                    value="3e4e6208-fd63-48c2-b4ca-207fff6dd226"
                  />
                  {errorMessage && (
                    <div className="text-center text-red-500 text-sm">{errorMessage}</div>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm placeholder:text-xs"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm placeholder:text-xs"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm placeholder:text-xs"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-xs font-semibold text-gray-700 mb-1">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm placeholder:text-xs"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="projectType" className="block text-xs font-semibold text-gray-700 mb-1">
                        Project Type *
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm"
                      >
                        <option value="">Select Project Type</option>
                        <option value="structural">Structural Engineering</option>
                        <option value="civil">Civil Engineering</option>
                        <option value="construction">Construction Engineering</option>
                        <option value="infrastructure">Infrastructure</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-xs font-semibold text-gray-700 mb-1">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm"
                      >
                        <option value="">Select Budget Range</option>
                        <option value="under-50k">Under $50,000</option>
                        <option value="50k-250k">$50,000 - $250,000</option>
                        <option value="250k-1m">$250,000 - $1,000,000</option>
                        <option value="1m-5m">$1,000,000 - $5,000,000</option>
                        <option value="over-5m">Over $5,000,000</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="timeline" className="block text-xs font-semibold text-gray-700 mb-1">
                      Project Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm"
                    >
                      <option value="">Select Timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="1-3-months">1-3 Months</option>
                      <option value="3-6-months">3-6 Months</option>
                      <option value="6-12-months">6-12 Months</option>
                      <option value="over-1-year">Over 1 Year</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-gray-700 mb-1">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="3"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm placeholder:text-xs resize-none"
                      placeholder="Please describe your engineering project requirements, location, and any specific needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-emerald-500 text-white font-semibold py-3 px-4 rounded-lg hover:from-blue-700 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 text-sm"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center">
          <div className="bg-gray-100 rounded-xl p-4">
            <h3 className="text-lg font-bold text-gray-900 mb-3">What Happens Next?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 font-bold text-sm">1</span>
                </div>
                <h4 className="font-semibold text-sm text-gray-800 mb-1">Engineering Consultation</h4>
                <p className="text-gray-600 text-xs">We'll schedule a free consultation to discuss your engineering needs and project vision.</p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-emerald-600 font-bold text-sm">2</span>
                </div>
                <h4 className="font-semibold text-sm text-gray-800 mb-1">3D Design & Analysis</h4>
                <p className="text-gray-600 text-xs">Our team creates detailed 3D models and comprehensive engineering analysis.</p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-purple-600 font-bold text-sm">3</span>
                </div>
                <h4 className="font-semibold text-sm text-gray-800 mb-1">Project Implementation</h4>
                <p className="text-gray-600 text-xs">Once approved, we begin implementation with regular updates and milestone tracking.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;