import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-emerald-600 to-teal-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">NNN</h1>
              <p className="text-sm text-emerald-700 font-semibold">Kartikeya Travels</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-emerald-700 transition-colors">Home</button>
            <button onClick={() => scrollToSection('vehicles')} className="text-gray-700 hover:text-emerald-700 transition-colors">Vehicles</button>
            <button onClick={() => scrollToSection('why-choose-us')} className="text-gray-700 hover:text-emerald-700 transition-colors">Why Us</button>
            <button onClick={() => scrollToSection('faq')} className="text-gray-700 hover:text-emerald-700 transition-colors">FAQ</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-emerald-700 transition-colors">Contact</button>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-1 text-sm text-gray-600">
              <Phone className="w-4 h-4" />
             <a
  href="tel:+917799118556" // Replace with your actual phone number
  className="w-full bg-gradient-to-r from-emerald-600 to-teal-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 group"
>
  <span>7799118556</span>
</a>
              <br/>
               <Phone className="w-4 h-4" />
                <a
  href="tel:+919573978446" // Replace with your actual phone number
  className="w-full bg-gradient-to-r from-emerald-600 to-teal-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 group"
>
  <span>9573978446</span>
</a>
            </div>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-emerald-600 to-teal-500 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Book Now
            </button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <nav className="flex flex-col space-y-4 p-4">
              <button onClick={() => scrollToSection('home')} className="text-left text-gray-700 hover:text-emerald-700">Home</button>
              <button onClick={() => scrollToSection('vehicles')} className="text-left text-gray-700 hover:text-emerald-700">Vehicles</button>
              <button onClick={() => scrollToSection('why-choose-us')} className="text-left text-gray-700 hover:text-emerald-700">Why Us</button>
              <button onClick={() => scrollToSection('faq')} className="text-left text-gray-700 hover:text-emerald-700">FAQ</button>
              <button onClick={() => scrollToSection('contact')} className="text-left text-gray-700 hover:text-emerald-700">Contact</button>
              <div className="flex flex-col space-y-2 pt-4 border-t">
                <div className="flex items-center space-x-1 text-sm text-gray-600">
                  <Phone className="w-4 h-4" />
             <a
  href="tel:+917799118556" // Replace with your actual phone number
  className="w-full bg-gradient-to-r from-emerald-600 to-teal-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 group"
>
  <span>7799118556</span>
</a>
              <br/>
               <Phone className="w-4 h-4" />
                <a
  href="tel:+919573978446" // Replace with your actual phone number
  className="w-full bg-gradient-to-r from-emerald-600 to-teal-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 group"
>
  <span>9573978446</span>
</a>
                </div>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-gradient-to-r from-emerald-600 to-teal-500 text-white px-6 py-2 rounded-lg w-fit"
                >
                  Book Now
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
