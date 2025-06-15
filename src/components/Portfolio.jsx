import React, { useState } from 'react';
import HighwayImage from '../assets/image/highway.jpg';
import BridgeImage from '../assets/image/bridge.jpg';
import SkyscraperImage from '../assets/image/skyscraper.jpg';
import RailwayImage from '../assets/image/railway.jpg';
import TunnelImage from '../assets/image/tunnel.jpg';
import ViaductImage from '../assets/image/6.jpg';

const projects = [
  {
    title: "Interstate Highway Expansion",
    category: "Roads",
    description: "200-mile highway upgrade with advanced drainage systems and smart traffic management.",
    image: HighwayImage
  },
  {
    title: "Skyline Suspension Bridge",
    category: "Bridges",
    description: "1.2-mile cable-stayed bridge with iconic architectural design and seismic resilience.",
    image: BridgeImage
  },
  {
    title: "Metropolitan Tower",
    category: "Skyscrapers",
    description: "80-story mixed-use skyscraper with sustainable energy systems and smart building tech.",
    image: SkyscraperImage
  },
  {
    title: "High-Speed Rail Network",
    category: "Railways",
    description: "350-mile electrified rail system connecting major cities with cutting-edge safety features.",
    image: RailwayImage
  },
  {
    title: "Mountain Pass Tunnel",
    category: "Tunnels",
    description: "5-mile twin-bore tunnel with advanced ventilation and emergency systems.",
    image: TunnelImage
  },
  {
    title: "Coastal Viaduct",
    category: "Bridges",
    description: "3-mile coastal viaduct with corrosion-resistant materials and scenic integration.",
    image: ViaductImage
  }
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Iconic Projects</h1>
          <p className="text-lg md:text-xl max-w-xl mx-auto">
            Explore our portfolio of groundbreaking infrastructure projects.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="portfolio" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Project Showcase</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="relative group cursor-pointer rounded-lg overflow-hidden shadow-2xl transform transition-all duration-500 hover:-translate-y-3 hover:shadow-3xl hover:rotate-y-5 hover:rotate-x-3 perspective-1000 transform-style-preserve-3d"
                onClick={() => openModal(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-96 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="p-6 text-white">
                    <span className="text-sm font-semibold uppercase">{project.category}</span>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Project Details */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-lg w-full mx-4 p-6 relative shadow-xl">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
              onClick={closeModal}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
            <p className="text-sm text-blue-600 font-semibold">{selectedProject.category}</p>
            <p className="text-gray-600 mt-2">{selectedProject.description}</p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">
              Contact Us
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;