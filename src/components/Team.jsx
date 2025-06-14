import React from 'react';
import { Linkedin, Mail, Award, Clock, Star } from 'lucide-react';

// Import local images from src/assets/
import randyColemanImage from '../assets/image/rand.jpg';
import michaelTorresImage from '../assets/image/mic.jpg';
import jenniferParkImage from '../assets/image/jenny.jpg';
import lisaRodriguezImage from '../assets/image/lisa.jpg';

const Team = () => {
  const team = [
    {
      name: 'Randy Coleman, P.E.',
      role: 'CEO & Principal Engineer, Randy Coleman Engineering Services',
      image: randyColemanImage,
      experience: '25+ Years',
      specialties: ['Structural Engineering', 'Project Leadership', '3D Design'],
      achievements: ['PE License', 'Industry Excellence Award', '750+ Projects'],
      bio: 'Principal Engineer with over 25 years of experience in structural and civil engineering, specializing in innovative 3D design solutions and sustainable engineering practices.',
    },
    {
      name: 'Michael Torres, P.E.',
      role: 'Civil Engineering Manager',
      image: michaelTorresImage,
      experience: '20+ Years',
      specialties: ['Infrastructure Design', 'Transportation', 'Water Systems'],
      achievements: ['PE License', 'Infrastructure Award', 'ASCE Fellow'],
      bio: 'Seasoned civil engineer specializing in infrastructure projects, transportation systems, and municipal engineering with a focus on sustainable solutions.',
    },
    {
      name: 'Jennifer Park, LEED AP',
      role: 'Sustainability Engineer',
      image: jenniferParkImage,
      experience: '15+ Years',
      specialties: ['Green Building', 'LEED Certification', 'Energy Analysis'],
      achievements: ['LEED AP BD+C', 'Green Building Award', 'Sustainability Leader'],
      bio: 'Environmental engineer dedicated to sustainable design practices, LEED certification, and energy-efficient building systems for modern construction.',
    },
    {
      name: 'Lisa Rodriguez, P.E.',
      role: 'Project Engineering Manager',
      image: lisaRodriguezImage,
      experience: '14+ Years',
      specialties: ['Project Coordination', 'Client Relations', 'Engineering Analysis'],
      achievements: ['PE License', 'Project Management Award', 'Client Excellence'],
      bio: 'Project engineering manager ensuring seamless coordination between design teams, clients, and construction phases for successful project delivery.',
    },
  ];

  return (
    <section id="team" className="py-16 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            <span className="text-gray-900">Meet Our </span>
            <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
              Leadership Team
            </span>
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            Randy Coleman Engineering Services is led by a team of experienced professionals in
            structural, civil, and sustainable engineering.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {team.map((member, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl p-5 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative mb-4">
                <div className="w-24 h-24 mx-auto relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full border-4 border-gray-100 group-hover:border-blue-200 transition-colors duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-emerald-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute top-1 right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white" />
              </div>

              <div className="text-center mb-4">
                <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-600 font-medium mb-1">{member.role}</p>
                <div className="flex items-center justify-center space-x-1 text-xs text-gray-500">
                  <Clock className="w-3 h-3" />
                  <span>{member.experience}</span>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-sm text-gray-800 mb-2">Specialties</h4>
                <div className="flex flex-wrap gap-1">
                  {member.specialties.map((specialty, specIndex) => (
                    <span
                      key={specIndex}
                      className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded-full text-xs group-hover:bg-blue-100 group-hover:text-blue-700 transition-colors duration-300"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-sm text-gray-800 mb-2 flex items-center">
                  <Award className="w-3 h-3 mr-1" />
                  Credentials
                </h4>
                <ul className="space-y-1">
                  {member.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-center text-xs text-gray-600">
                      <Star className="w-3 h-3 text-yellow-500 mr-1 flex-shrink-0" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-4">
                <p className="text-xs text-gray-600 leading-relaxed">{member.bio}</p>
              </div>

              <div className="flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="p-1.5 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors duration-300">
                  <Linkedin className="w-4 h-4" />
                </button>
                <button className="p-1.5 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors duration-300">
                  <Mail className="w-4 h-4" />
                </button>
              </div>

              <div className="absolute top-3 right-3 w-4 h-4 bg-gradient-to-r from-blue-200 to-emerald-200 rounded transform rotate-45 opacity-20 group-hover:rotate-90 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;