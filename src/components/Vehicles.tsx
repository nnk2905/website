import React from 'react';
import VehicleCard from './VehicleCard';

const Vehicles = () => {
  const vehicles = [
    {
      model: 'Ertiga VXI BA6 2024',
      price: '₹2500-₹3000',
      doors: '4 Doors',
      seats: '7 Seats',
      luggage: '4 Luggage Bags',
      fuelType: 'Petrol and CNG',
      ac: 'Yes',
      image: 'https://imgd.aeplcdn.com/664x374/n/p0fs93a_1572127.jpg?q=80',
    },
    {
      model: 'Maruti Suzuki Dzire 2024',
      price: '₹1600-₹2500',
      doors: '4 Doors',
      seats: '4 Seats',
      luggage: '3 Luggage Bags',
      fuelType: 'Petrol and CNG',
      ac: 'Yes',
      image:
        'https://imgd.aeplcdn.com/664x374/cw/ec/26860/Maruti-Suzuki-Dzire-Exterior-118637.jpg?wm=0&q=80',
    },
  ];

  return (
    <section id="vehicles" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Vehicle <span className="text-emerald-700">Models</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our premium fleet of well-maintained vehicles for your
            perfect journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {vehicles.map((vehicle, index) => (
            <VehicleCard key={index} {...vehicle} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vehicles;
