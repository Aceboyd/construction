import React, { useState } from 'react';
import { 
  Eye, 
  RotateCcw, 
  Calendar, 
  MapPin, 
  Star, 
  HardHat,
  Landmark,
  Building,
  Settings 
} from 'lucide-react';

// Import local images
import bridge1 from '../assets/image/1.jpg';
import bridge2 from '../assets/image/2.jpg';
import bridge3 from '../assets/image/3.jpg';
import skyscraper1 from '../assets/image/4.jpg';
import tunnel1 from '../assets/image/5.jpg';
import palm1 from '../assets/image/6.jpg';

const CivilEngineeringGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Projects', icon: <HardHat size={16} /> },
    { id: 'bridges', name: 'Bridges', icon: <Landmark size={16} /> },
    { id: 'skyscrapers', name: 'Skyscrapers', icon: <Building size={16} /> },
    { id: 'infrastructure', name: 'Infrastructure', icon: <Settings size={16} /> }
  ];

  const projects = [
    {
      id: 1,
      title: "Bay Bridge",
      category: "bridges",
      image: bridge1,
      description: "Self-anchored suspension bridge construction",
      completion: "2007",
      location: "USA",
      rating: 4.9,
      features: ["Suspension Cables", "Deck Installation", "Seismic Retrofit"],
      progress: 92
    },
    {
      id: 2,
      title: "Viaduct Construction",
      category: "bridges",
      image: bridge2,
      description: "Cable-stayed bridge with tallest piers in the world",
      completion: "2015",
      location: "France",
      rating: 4.8,
      features: ["Cable-Stayed Design", "Concrete Piers", "Steel Deck"],
      progress: 78
    },
    {
      id: 3,
      title: "Zhuhai-Macau Bridge",
      category: "bridges",
      image: bridge3,
      description: "World's longest sea-crossing bridge-tunnel system",
      completion: "2003",
      location: "Pearl River Delta, China",
      rating: 4.7,
      features: ["Undersea Tunnels", "Artificial Islands", "Marine Foundations"],
      progress: 100
    },
    {
      id: 4,
      title: "One World Trade Center",
      category: "skyscrapers",
      image: skyscraper1,
      description: "541m tall skyscraper with reinforced concrete core",
      completion: "2018",
      location: "New York, USA",
      rating: 4.9,
      features: ["Composite Structure", "Wind Dampers", "Blast Protection"],
      progress: 100
    },
    {
      id: 5,
      title: "Gotthard Base Tunnel",
      category: "infrastructure",
      image: tunnel1,
      description: "World's longest railway tunnel through the Alps",
      completion: "2010",
      location: "Switzerland",
      rating: 4.8,
      features: ["TBM Excavation", "Safety Systems", "Ventilation"],
      progress: 95
    },
    {
      id: 6,
      title: "Jumeirah Construction",
      category: "infrastructure",
      image: palm1,
      description: "Artificial archipelago construction",
      completion: "2012",
      location: "UAE",
      rating: 4.6,
      features: ["Land Reclamation", "Breakwaters", "Marine Engineering"],
      progress: 85
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="civil-projects" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            <span>Heavy Civil </span>
            <span className="text-blue-600">Construction Projects</span>
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Landmark infrastructure projects showcasing our engineering expertise
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center mb-8 gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white text-xs font-medium bg-blue-600 px-2 py-1 rounded">
                      {project.category === 'bridges' ? 'Bridge Construction' : 
                       project.category === 'skyscrapers' ? 'Skyscraper' : 
                       'Infrastructure'}
                    </span>
                    <div className="flex items-center text-white text-xs">
                      <Star className="w-3 h-3 fill-yellow-400 mr-1" />
                      {project.rating}
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gray-200">
                  <div 
                    className="h-full bg-blue-600" 
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{project.description}</p>
                
                <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                  <div className="flex items-center">
                    <MapPin className="w-3 h-3 mr-1" />
                    {project.location}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {project.completion}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded text-xs"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded transition-colors">
                  View Engineering Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-10">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-colors">
            <HardHat className="mr-2" size={18} />
            Explore All Mega Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default CivilEngineeringGallery;
