import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MessageCircle, MapPin, CheckCircle } from 'lucide-react';
import Button from '../components/Button';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate backend submission delay
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      // Reset status after a few seconds if desired, but request says show message
    }, 800);
  };

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Offerte Aanvragen</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Heeft u een project in gedachten of wilt u vrijblijvend advies? 
            Vul het formulier in of neem direct contact op.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Info & Direct CTA */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
              <h2 className="text-2xl font-bold text-primary mb-6">Contactgegevens</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gray-100 p-3 rounded-full text-secondary">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Locatie</h4>
                    <p className="text-gray-600">Hilversum, Nederland</p>
                    <p className="text-gray-500 text-sm mt-1">Werkzaam in de gehele regio</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gray-100 p-3 rounded-full text-secondary">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">E-mail</h4>
                    <p className="text-gray-600 mb-2">Voor algemene vragen:</p>
                    <Button 
                      to="mailto:info.sjefit@gmail.com" 
                      variant="outline" 
                      external 
                      className="text-sm py-2 px-4"
                    >
                      info.sjefit@gmail.com
                    </Button>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-50 p-3 rounded-full text-green-600">
                    <MessageCircle size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-800">WhatsApp</h4>
                    <p className="text-gray-600 mb-3">Snel en direct contact?</p>
                    <Button 
                      to="https://wa.me/31612345678" 
                      variant="primary" 
                      external 
                      className="bg-[#25D366] hover:bg-[#128C7E] w-full text-center flex items-center justify-center gap-2"
                    >
                      <MessageCircle size={20} /> Contact via WhatsApp
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-primary text-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4">Direct Bellen?</h3>
              <p className="mb-4 text-gray-300">Wij zijn telefonisch bereikbaar op werkdagen van 09:00 tot 17:00.</p>
              <a href="tel:+31612345678" className="text-2xl font-bold flex items-center gap-3 hover:text-secondary transition-colors">
                <Phone /> +31 6 1234 5678
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-secondary"
          >
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10">
                <div className="bg-green-100 text-green-600 p-4 rounded-full mb-6">
                  <CheckCircle size={48} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Bedankt voor uw bericht!</h3>
                <p className="text-gray-600 max-w-md">
                  We hebben uw aanvraag goed ontvangen en nemen zo snel mogelijk contact met u op.
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-8 text-secondary underline hover:text-red-700"
                >
                  Nieuw bericht sturen
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-2xl font-bold text-primary mb-2">Stuur ons een bericht</h2>
                <p className="text-gray-500 text-sm mb-6">Velden met een * zijn verplicht.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Naam *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                      placeholder="Uw naam"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefoonnummer</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                      placeholder="06 12345678"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mailadres *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                    placeholder="naam@voorbeeld.nl"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Uw bericht / Projectomschrijving *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                    placeholder="Beschrijf waar we u mee kunnen helpen..."
                  ></textarea>
                </div>

                <div className="pt-2">
                  <Button type="submit" variant="primary" className="w-full flex items-center justify-center gap-2 py-4 text-lg">
                    Verstuur Bericht <Send size={18} />
                  </Button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;