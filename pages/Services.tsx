import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { servicesData } from '../data/services';
import { Check, ExternalLink } from 'lucide-react';

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'particulier' | 'zakelijk'>('particulier');
  
  const currentService = servicesData.find(s => s.id === activeTab) || servicesData[0];

  return (
    <div className="pt-24 pb-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Onze Diensten</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Ontdek onze gespecialiseerde oplossingen voor zowel particuliere als zakelijke toepassingen.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 p-1 rounded-lg inline-flex">
            <button
              onClick={() => setActiveTab('particulier')}
              className={`px-8 py-3 rounded-md font-semibold transition-all duration-300 ${
                activeTab === 'particulier' 
                  ? 'bg-white text-secondary shadow-md' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Particulier
            </button>
            <button
              onClick={() => setActiveTab('zakelijk')}
              className={`px-8 py-3 rounded-md font-semibold transition-all duration-300 ${
                activeTab === 'zakelijk' 
                  ? 'bg-white text-secondary shadow-md' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Zakelijk
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="min-h-[600px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
            >
              {/* Text Content */}
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">{currentService.title}</h2>
                <div className="w-20 h-1 bg-secondary mb-6"></div>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {currentService.intro}
                </p>

                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 mb-10">
                  <h3 className="font-bold text-lg mb-4 text-primary">Wat wij bieden:</h3>
                  <ul className="space-y-3">
                    {currentService.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <span className="bg-white p-1 rounded-full shadow-sm text-secondary">
                          <Check size={16} />
                        </span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Brands List */}
                <div>
                  <h3 className="font-bold text-2xl text-primary mb-6">Onze Merken</h3>
                  <div className="grid grid-cols-1 gap-6">
                    {currentService.brands.map((brand, idx) => (
                      <div key={idx} className="border-b border-gray-100 last:border-0 pb-6 last:pb-0">
                        <div className="flex justify-between items-baseline mb-2">
                          <h4 className="text-lg font-bold text-gray-800">{brand.name}</h4>
                          {brand.website && (
                            <a 
                              href={brand.website} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-xs text-gray-400 hover:text-secondary flex items-center gap-1"
                            >
                              website <ExternalLink size={12}/>
                            </a>
                          )}
                        </div>
                        <p className="text-gray-600 text-sm">{brand.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Image Content */}
              <div className="relative sticky top-28">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={currentService.image} 
                    alt={currentService.title} 
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="text-sm font-semibold uppercase tracking-wider opacity-90">Divid-One Solutions</p>
                    <p className="text-xl font-bold">{activeTab === 'particulier' ? 'Luxury Living' : 'Professional Performance'}</p>
                  </div>
                </div>
                
                {/* Decorative element */}
                <div className="absolute -z-10 top-10 -right-10 w-full h-full border-2 border-secondary/20 rounded-2xl hidden lg:block"></div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Services;