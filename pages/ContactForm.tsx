import React, { useState } from 'react';

export const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'waas', 
    message: ''
  });

  const encode = (data: any) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formData }),
    })
    .then(() => {
      setStatus('success');
      setFormData({ name: '', email: '', type: 'waas', message: '' });
    })
    .catch((error) => {
      alert("Er ging iets mis. Probeer het later opnieuw.");
      setStatus('idle');
    });
  };

  if (status === 'success') {
    return (
      <div className="p-8 text-center bg-gray-800 border border-green-500 rounded-2xl">
        <h3 className="text-2xl font-bold text-white mb-2">✅ Bericht Ontvangen!</h3>
        <p className="text-gray-300">We nemen binnen 24 uur contact op.</p>
        <button 
          onClick={() => setStatus('idle')}
          className="mt-6 text-orange-500 underline"
        >
          Nog een bericht sturen
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white/5 border border-white/10 p-8 rounded-2xl">
      <input type="hidden" name="form-name" value="contact" />

      <div>
        <label className="block text-gray-400 mb-2">Naam</label>
        <input 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          required
          className="w-full bg-gray-900 border border-gray-700 rounded p-3 text-white"
        />
      </div>

      <div>
        <label className="block text-gray-400 mb-2">E-mail</label>
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          required
          className="w-full bg-gray-900 border border-gray-700 rounded p-3 text-white"
        />
      </div>

      <div>
        <label className="block text-gray-400 mb-2">Interesse in</label>
        <select 
            name="type" 
            value={formData.type} 
            onChange={handleChange}
            className="w-full bg-gray-900 border border-gray-700 rounded p-3 text-white"
        >
            <option value="waas">WaaS Model (Lease)</option>
            <option value="classic">Klassiek Model (Koop)</option>
            <option value="advise">Ik wil advies</option>
        </select>
      </div>

      <div>
        <label className="block text-gray-400 mb-2">Bericht</label>
        <textarea 
          name="message" 
          value={formData.message} 
          onChange={handleChange} 
          rows={4} 
          required
          className="w-full bg-gray-900 border border-gray-700 rounded p-3 text-white"
        ></textarea>
      </div>

      <button 
        type="submit" 
        disabled={status === 'submitting'}
        className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 rounded transition-colors"
      >
        {status === 'submitting' ? 'Even geduld...' : 'Verstuur Aanvraag'}
      </button>
    </form>
  );
};