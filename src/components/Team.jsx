import React from 'react';
import { Linkedin, Mail, Award, Clock, Star } from 'lucide-react';

const Team = () => {
  const team = [
    {
      name: "Randy Coleman, P.E.",
      role: "CEO & Principal Engineer, Randy Coleman Engineering Services",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      experience: "25+ Years",
      specialties: ["Structural Engineering", "Project Leadership", "3D Design"],
      achievements: ["PE License", "Industry Excellence Award", "750+ Projects"],
      bio: "Principal Engineer with over 25 years of experience in structural and civil engineering, specializing in innovative 3D design solutions and sustainable engineering practices."
    },
    {
      name: "Sarah Mitchell, P.E.",
      role: "Senior Structural Engineer",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg",
      experience: "18+ Years",
      specialties: ["Structural Analysis", "Seismic Design", "Building Codes"],
      achievements: ["PE License", "Structural Excellence Award", "AISC Certified"],
      bio: "Expert structural engineer with extensive experience in high-rise buildings, seismic design, and advanced structural analysis using cutting-edge software."
    },
    {
      name: "Michael Torres, P.E.",
      role: "Civil Engineering Manager",
      image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg",
      experience: "20+ Years",
      specialties: ["Infrastructure Design", "Transportation", "Water Systems"],
      achievements: ["PE License", "Infrastructure Award", "ASCE Fellow"],
      bio: "Seasoned civil engineer specializing in infrastructure projects, transportation systems, and municipal engineering with a focus on sustainable solutions."
    },
    {
      name: "Jennifer Park, LEED AP",
      role: "Sustainability Engineer",
      image: "https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg",
      experience: "15+ Years",
      specialties: ["Green Building", "LEED Certification", "Energy Analysis"],
      achievements: ["LEED AP BD+C", "Green Building Award", "Sustainability Leader"],
      bio: "Environmental engineer dedicated to sustainable design practices, LEED certification, and energy-efficient building systems for modern construction."
    },
    {
      name: "David Kim, P.E.",
      role: "Construction Engineering Lead",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg",
      experience: "16+ Years",
      specialties: ["Construction Management", "Quality Control", "Safety Systems"],
      achievements: ["PE License", "Construction Excellence", "PMP Certified"],
      bio: "Construction engineering specialist with expertise in project management, quality assurance, and safety implementation for complex engineering projects."
    },
    {
      name: "Lisa Rodriguez, P.E.",
      role: "Project Engineering Manager",
      image: "https://images.pexels.com/photos/3756045/pexels-photo-3756045.jpeg",
      experience: "14+ Years",
      specialties: ["Project Coordination", "Client Relations", "Engineering Analysis"],
      achievements: ["PE License", "Project Management Award", "Client Excellence"],
      bio: "Project engineering manager ensuring seamless coordination between design teams, clients, and construction phases for successful project delivery."
    }
  ];

  const skills = [
    { name: "Structural Engineering", percentage: 98 },
    { name: "Civil Engineering", percentage: 95 },
    { name: "3D Design & Modeling", percentage: 92 },
    { name: "Project Management", percentage: 96 },
    { name: "Sustainable Design", percentage: 88 },
    { name: "Construction Engineering", percentage: 94 }
  ];

  return (
    <section id="team" className="py-16 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            <span className="text-gray-900">Meet Our </span>
            <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
              Engineering Team
            </span>
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            Randy Coleman Engineering Services brings together a diverse team of licensed professional engineers 
            with decades of combined experience in structural, civil, and construction engineering.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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

        {/* Skills Section */}
        <div className="bg-gray-900 rounded-2xl p-6 md:p-10">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-white mb-2">Engineering Expertise</h3>
            <p className="text-sm text-gray-300">Our collective engineering skills and proficiency levels</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-white font-medium">{skill.name}</span>
                  <span className="text-emerald-400 font-semibold text-sm">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full transform transition-all duration-1000 ease-out"
                    style={{ width: `${skill.percentage}%`, animationDelay: `${index * 200}ms` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14 text-sm">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600 mb-1">12+</div>
            <div className="text-gray-600">Licensed Engineers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-emerald-600 mb-1">150+</div>
            <div className="text-gray-600">Certifications</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-500 mb-1">25+</div>
            <div className="text-gray-600">Industry Awards</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600 mb-1">99%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
