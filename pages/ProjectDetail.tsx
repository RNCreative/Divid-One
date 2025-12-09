import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import { ArrowLeft, Calendar, MapPin, Tag, X, ZoomIn } from 'lucide-react';
import Button from '../components/Button';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-gray-50">
        <h2 className="text-3xl font-bold text-primary mb-4">Project niet gevonden</h2>
        <Button to="/portfolio" variant="primary">Terug naar Portfolio</Button>
      </div>
    );
  }

  // Use gallery if available, otherwise just main image repeated for demo
  const galleryImages = project.gallery || [project.image, project.image, project.image];

  return (
    <div className="bg-white min-h-screen">
      
      {/* Hero Header */}
      <div className="relative h-[60vh] lg:h-[70vh] w-full overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
        
        <div className="absolute top-24 left-4 md:left-8 z-20">
          <Link 
            to="/portfolio" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors bg-black/20 hover:bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm"
          >
            <ArrowLeft size={18} /> Terug naar overzicht
          </Link>
        </div>

        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 lg:p-20 z-10">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-3 py-1 bg-secondary text-white text-sm font-bold tracking-wider uppercase rounded-sm mb-4">
                {project.category}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 shadow-sm">
                {project.title}
              </h1>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-primary mb-6">Over dit project</h2>
              <p className="text-lg text-gray-600 leading-relaxed whitespace-pre-line mb-8">
                {project.fullDescription || project.description}
              </p>

              {/* Gallery Grid */}
              <h3 className="text-xl font-bold text-primary mb-6 mt-12">Galerij</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {galleryImages.map((img, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer group shadow-md"
                    onClick={() => setSelectedImage(img)}
                  >
                    <img 
                      src={img} 
                      alt={`${project.title} detail ${index + 1}`} 
                      className="w-full h-full object-cover transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <ZoomIn className="text-white drop-shadow-md" size={32} />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar Info */}
          <div className="lg:col-span-1">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gray-50 p-8 rounded-xl border border-gray-100 sticky top-28"
            >
              <h3 className="text-xl font-bold text-primary mb-6 border-b border-gray-200 pb-2">Project Details</h3>
              
              <div className="space-y-6">
                {project.location && (
                  <div className="flex items-start gap-3">
                    <MapPin className="text-secondary mt-1" size={20} />
                    <div>
                      <span className="block text-sm text-gray-500">Locatie</span>
                      <span className="font-medium text-primary">{project.location}</span>
                    </div>
                  </div>
                )}
                
                {project.year && (
                  <div className="flex items-start gap-3">
                    <Calendar className="text-secondary mt-1" size={20} />
                    <div>
                      <span className="block text-sm text-gray-500">Jaar</span>
                      <span className="font-medium text-primary">{project.year}</span>
                    </div>
                  </div>
                )}

                {project.tags && project.tags.length > 0 && (
                  <div className="flex items-start gap-3">
                    <Tag className="text-secondary mt-1" size={20} />
                    <div>
                      <span className="block text-sm text-gray-500 mb-2">Technieken</span>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, i) => (
                          <span key={i} className="text-xs bg-white border border-gray-200 px-2 py-1 rounded text-gray-600">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-gray-600 text-sm mb-4">Interesse in een soortgelijk project?</p>
                <Button to="/contact" variant="primary" className="w-full text-center">
                  Neem contact op
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-4 right-4 text-white hover:text-secondary transition-colors p-2"
              onClick={() => setSelectedImage(null)}
            >
              <X size={40} />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={selectedImage}
              alt="Full screen view"
              className="max-w-full max-h-full object-contain rounded-md shadow-2xl"
              onClick={(e) => e.stopPropagation()} 
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectDetail;