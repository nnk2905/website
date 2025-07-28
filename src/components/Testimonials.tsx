import React from 'react';

const Testimonials = () => {
  const testimonials = [
    "Affordable rates!",
    "Quick and easy booking!",
    "Helpful support!",
    "Booked Twice in one week!",
    "Great service!",
    "Smooth drive!",
    "Friendly staff!",
    "Affordable rates!",
    "Quick and easy booking!",
    "Helpful support!",
    "Booked Twice in one week!",
    "Great service!",
    "Smooth drive!",
    "Friendly staff!",
    "Affordable rates!",
    "Quick and easy booking!",
    "Helpful support!",
    "Booked Twice in one week!",
    "Great service!",
    "Smooth drive!",
    "Friendly staff!"
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Customers Are <span className="text-emerald-700">Saying...</span>
          </h2>
        </div>
        
        <div className="relative">
          <div className="flex animate-scroll space-x-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="flex-shrink-0 bg-gradient-to-r from-emerald-600 to-teal-500 text-white px-6 py-4 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <span className="font-semibold whitespace-nowrap">{testimonial}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;