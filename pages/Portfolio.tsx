import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import Button from '../components/Button';
import { ArrowRight } from 'lucide-react';

const Portfolio: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-primary mb-6"
          >
            Onze Projecten
          </motion.h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Bekijk een selectie van onze realisaties in licht, beeld en geluid.
            Van intieme thuisbioscopen tot grootschalige zakelijke installaties.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 group flex flex-col h-full hover:shadow-xl transition-shadow duration-300"
            >
              {/* Clickable Image Area */}
              <Link to={`/portfolio/${project.id}`} className="relative h-64 overflow-hidden block cursor-pointer">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase tracking-wider text-secondary rounded-full shadow-sm">
                  {project.category}
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              
              <div className="p-8 flex flex-col flex-grow">
                <Link to={`/portfolio/${project.id}`} className="hover:text-secondary transition-colors">
                  <h2 className="text-2xl font-bold text-primary mb-3">{project.title}</h2>
                </Link>
                <div className="w-12 h-1 bg-secondary mb-4"></div>
                <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>
                
                {/* Action Footer */}
                <div className="pt-6 border-t border-gray-100 flex justify-between items-center">
                  <span className="text-sm text-gray-400 italic">Divid-One Project</span>
                  <Link 
                    to={`/portfolio/${project.id}`}
                    className="inline-flex items-center gap-2 text-secondary font-semibold hover:gap-3 transition-all"
                  >
                    Bekijk project <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center bg-gray-50 rounded-2xl p-10 border border-gray-200">
          <h3 className="text-2xl font-bold text-primary mb-4">Benieuwd wat wij voor u kunnen betekenen?</h3>
          <p className="text-gray-600 mb-8">Wij denken graag mee over uw specifieke wensen.</p>
          <Button to="/contact" variant="primary">
            Vraag vrijblijvend advies aan
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;