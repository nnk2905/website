import React from 'react';
import { Car, Users, Luggage, Fuel, Wind, ArrowRight } from 'lucide-react';

interface VehicleCardProps {
  model: string;
  price: string;
  doors: string;
  seats: string;
  luggage: string;
  fuelType: string;
  ac: string;
  image: string;
}

const VehicleCard: React.FC<VehicleCardProps> = ({
  model,
  price,
  doors,
  seats,
  luggage,
  fuelType,
  ac,
  image
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
      <div className="h-56 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
        <img 
          src={image} 
          alt={model}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-900">{model}</h3>
          <div className="text-right">
            <div className="text-2xl font-bold text-emerald-700">{price}</div>
            <div className="text-sm text-gray-600">Rent Per Day</div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center space-x-2 text-gray-600">
            <Car className="w-4 h-4" />
            <span className="text-sm">{doors}</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <Users className="w-4 h-4" />
            <span className="text-sm">{seats}</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <Luggage className="w-4 h-4" />
            <span className="text-sm">{luggage}</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <Fuel className="w-4 h-4" />
            <span className="text-sm">{fuelType}</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600 col-span-2">
            <Wind className="w-4 h-4" />
            <span className="text-sm">AC: {ac}</span>
          </div>
        </div>
        
        <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 group">
          <span>Book Now</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default VehicleCard;