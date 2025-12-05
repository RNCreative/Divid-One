import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Speaker, Lightbulb, Monitor } from 'lucide-react';
import Button from '../components/Button';
import { projects } from '../data/projects';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  // Use first 3 projects
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image Placeholder */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url('https://picsum.photos/seed/home/1920/1080')`,
            filter: 'brightness(0.4)'
          }}
        ></div>
        
        <div className="container mx-auto px-4 z-10 relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
              UW PARTNER IN <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                LICHT, BEELD EN GELUID
              </span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Divid-One realiseert hoogwaardige audiovisuele oplossingen voor woning en bedrijf. 
              Van sfeervolle verlichting tot complexe narrowcasting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button to="/contact" variant="primary" className="text-lg px-8 py-4">
                Neem contact op
              </Button>
              <Button to="/portfolio" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
                Bekijk Projecten
              </Button>
            </div>
          </motion.div>
        </div>
        
        {/* Decorative circuit pattern overlay could go here */}
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Onze Expertise</h2>
            <div className="w-20 h-1 bg-secondary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Particulier */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-gray-50 p-8 rounded-lg shadow-sm border border-gray-100 group"
            >
              <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-md mb-6 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                <Speaker size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Particulier</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Transformeer uw huis met smart home oplossingen, multiroom audio van topmerken en sfeervolle verlichting.
              </p>
              <ul className="space-y-2 mb-8 text-gray-500">
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-secondary"/> Home Cinema</li>
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-secondary"/> Smart Lighting</li>
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-secondary"/> Audio Integratie</li>
              </ul>
              <Link to="/services" className="text-secondary font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                Meer informatie <ArrowRight size={18} />
              </Link>
            </motion.div>

            {/* Zakelijk */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-gray-50 p-8 rounded-lg shadow-sm border border-gray-100 group"
            >
              <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-md mb-6 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                <Monitor size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Zakelijk</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Professionele presentatiesystemen, narrowcasting en perfect geluid voor uw kantoor, horeca of winkel.
              </p>
              <ul className="space-y-2 mb-8 text-gray-500">
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-secondary"/> Video Conferencing</li>
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-secondary"/> Presentatieschermen</li>
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-secondary"/> Achtergrondmuziek</li>
              </ul>
              <Link to="/services" className="text-secondary font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                Meer informatie <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 bg-dark text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Recente Projecten</h2>
              <div className="w-20 h-1 bg-secondary"></div>
            </div>
            <Button to="/portfolio" variant="outline" className="mt-6 md:mt-0 border-gray-600 text-gray-300 hover:border-white hover:text-white hover:bg-transparent">
              Bekijk volledig portfolio
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <div key={project.id} className="group relative overflow-hidden rounded-lg aspect-[4/3]">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform">
                  <span className="text-secondary text-sm font-semibold uppercase tracking-wider">{project.category}</span>
                  <h3 className="text-xl font-bold mt-1 mb-2">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Waarom Divid-One?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Wij combineren technisch vakmanschap met oog voor esthetiek.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="inline-block p-4 bg-white rounded-full shadow-md mb-4 text-secondary">
                <Lightbulb size={32} />
              </div>
              <h4 className="text-xl font-bold mb-2 text-primary">Innovatief Design</h4>
              <p className="text-gray-600">Wij werken met de nieuwste technieken die naadloos opgaan in uw interieur.</p>
            </div>
            <div className="p-6">
              <div className="inline-block p-4 bg-white rounded-full shadow-md mb-4 text-secondary">
                <CheckCircle size={32} />
              </div>
              <h4 className="text-xl font-bold mb-2 text-primary">Betrouwbare Service</h4>
              <p className="text-gray-600">Van advies tot installatie en nazorg; wij staan voor u klaar.</p>
            </div>
            <div className="p-6">
              <div className="inline-block p-4 bg-white rounded-full shadow-md mb-4 text-secondary">
                <Speaker size={32} />
              </div>
              <h4 className="text-xl font-bold mb-2 text-primary">A-Merken</h4>
              <p className="text-gray-600">Wij werken uitsluitend met gerenommeerde merken voor de beste kwaliteit.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;