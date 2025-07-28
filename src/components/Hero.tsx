import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const Hero = () => {
  const scrollToVehicles = () => {
    const element = document.getElementById('vehicles');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-teal-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Background Car Image */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src="https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" 
          alt="Luxury car background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="flex items-center justify-center space-x-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="ml-2 text-sm opacity-90">Trusted by 100+ customers</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block">NNN</span>
            <span className="block text-emerald-300">Kartikeya</span>
            <span className="block">Travels</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed max-w-3xl mx-auto">
            Experience hassle-free travel with Kartikeya Travels, 24/7 Rental Cars. Whether you are planning a vacation or a business trip, we ensure a seamless and comfortable journey tailored to your needs.
          </p>
                    <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed max-w-3xl mx-auto">
            ***We also provide professional drivers for your personal vehicles on an hourly basis.***
          </p>
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 flex items-center justify-center space-x-4">
              <span>The</span>
              <span className="text-emerald-300">BEST</span>
              <span>way to</span>
              <span className="text-emerald-300">TRAVEL</span>
            </h2>
            
            <button 
              onClick={scrollToVehicles}
              className="group bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center space-x-2 mx-auto"
            >
              <span>Book Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
