import React from 'react';
import { DollarSign, Map, Eye, Clock,CalendarRange ,UserCheck } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: DollarSign,
      title: "Best valued deals you will ever find",
      description: "We offer the best cars at unbeatable rental prices, ensuring you get the most value for your money. Whether you're booking for business or leisure, our deals are designed to cater to your needs."
    },
    {
      icon: Map,
      title: "Cross Country Drive",
      description: "Take your journey anywhere across the country with our well-maintained fleet. With experienced drivers or self-driving options, you can explore new destinations with ease and comfort."
    },
    {
      icon: Eye,
      title: "Transparent pricing",
      description: "Our pricing is all-inclusive with no hidden charges. You can enjoy a seamless booking experience with the assurance that what you see is what you pay."
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "We are available round the clock for all your travel needs. Book your rental car anytime, whether it's for an urgent trip or a planned vacation."
    },
    {
      icon:UserCheck,
        title:"Well Trained Drivers",
        description:"Our drivers are professionally trained, background-checked, and highly rated by customers. Enjoy a safe and comfortable ride every time with affordable prices."
    },
    {icon:CalendarRange,
  title: "Flexible Rental Plans",
  description: "Rent by the hour, day, or week — we offer flexible plans to suit your schedule and budget."}

  ];

  return (
    <section id="why-choose-us" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-emerald-700">Us</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-emerald-100">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-teal-500 rounded-xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-emerald-700 to-teal-600 rounded-2xl p-8 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img 
              src="https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop" 
              alt="Car interior" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Easy and Hassle-Free Booking</h3>
            <p className="text-lg opacity-90">
              We are available round the clock for all your travel needs. Book your rental car anytime, 
              whether it's for an urgent trip or a planned vacation through a simple call.
            </p>
          </div>
           <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Easy and Hassle-Free Booking</h3>
            <p className="text-lg opacity-90">
            Please note: Customers are required to submit a valid government-issued ID proof (such as Aadhaar, PAN card, etc.) for the duration of the journey. Additionally, a valid driving license must be presented before the trip begins.',

            </p>
          </div>
   <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Easy and Hassle-Free Booking</h3>
            <p className="text-lg opacity-90">
           Have your own car but need a driver?
We provide experienced, professional drivers for your personal vehicles — anytime, anywhere.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
