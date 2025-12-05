import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { Target, Eye } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        
        {/* Intro */}
        <section className="max-w-4xl mx-auto text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-primary mb-6"
          >
            Over Divid-One
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-secondary font-medium mb-8"
          >
            Specialisten in audiovisuele beleving
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-gray-600 leading-relaxed text-justify md:text-center"
          >
            Divid-One uit Hilversum is uw expert op het gebied van hoogwaardige installatietechniek. 
            Wij zijn gespecialiseerd in het samenbrengen van licht, beeld en geluid tot één harmonieus geheel. 
            Of het nu gaat om een complex domoticasysteem in een moderne villa of een gebruiksvriendelijke 
            presentatieruimte voor uw bedrijf; wij leveren maatwerk met oog voor detail en esthetiek.
          </motion.p>
        </section>

        {/* Mission / Vision */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-secondary">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gray-100 p-3 rounded-full text-secondary">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-bold text-primary">Onze Missie</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Het is onze missie om technologie onzichtbaar en intuïtief te maken. Wij geloven dat 
              apparatuur in dienst moet staan van de gebruiker, zonder de esthetiek van de ruimte te verstoren. 
              Kwaliteit en gebruiksgemak staan hierbij altijd voorop.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-primary">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gray-100 p-3 rounded-full text-primary">
                <Eye size={32} />
              </div>
              <h3 className="text-2xl font-bold text-primary">Onze Visie</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Wij streven naar een wereld waarin elke ruimte de juiste sfeer ademt door perfect afgestemd licht en geluid. 
              Door continu te innoveren en te werken met de beste merken, blijven wij vooroplopen in de snel 
              veranderende wereld van AV-techniek.
            </p>
          </div>
        </section>

        {/* Services Summary */}
        <section className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h3 className="text-3xl font-bold text-primary mb-4">Wat wij voor u doen</h3>
              <p className="text-gray-600 mb-6">
                Van concept tot realisatie. Wij ontzorgen u volledig op het gebied van:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['Smart Home', 'Zakelijke Oplossingen', 'Audio & Video', 'Lichtplannen'].map(item => (
                  <li key={item} className="flex items-center gap-2 font-medium text-gray-700">
                    <span className="w-2 h-2 bg-secondary rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-shrink-0">
               <Button to="/contact" variant="primary" className="text-lg px-8 py-4">
                 Neem contact op
               </Button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default About;