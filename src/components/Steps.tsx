import React from 'react';
import { Search, Phone, Calendar, Car } from 'lucide-react';

const Steps = () => {
  const steps = [
    {
      icon: Search,
      number: '01',
      title: 'Explore Our Fleet',
      description:
        'Visit our website and explore the available car models. Choose a model that suits your trip needs.',
    },
    {
      icon: Phone,
      number: '02',
      title: 'Request Your Car',
      description:
        "Can't find the car model you need? No worries! Request a car by filling out the form or call us directly.",
    },
    {
      icon: Calendar,
      number: '03',
      title: 'Schedule Your Trip',
      description:
        'Once your car is confirmed, schedule your trip by selecting your preferred date and the departure area.',
    },
    {
      icon: Car,
      number: '04',
      title: 'Enjoy Your Journey',
      description:
        'Enjoy a hassle-free journey with NNN Kartikeya Travels and create unforgettable memories.'  },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Steps To <span className="text-emerald-700">Follow</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Simple and straightforward process to get you on the road
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {step.number}
                  </div>
                </div>

                <div className="mt-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-emerald-700" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-emerald-600 to-teal-500 z-10"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
