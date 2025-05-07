import React from 'react';
import Image from 'next/image';

interface TripCardProps {
  location: string;
  address: string;
  checkInDate: string;
  checkOutDate: string;
  imageUrl: string;
}

const TripCard: React.FC<TripCardProps> = ({ location, address, checkInDate, checkOutDate, imageUrl }) => {
  return (
    <div className="bg-card-bg backdrop-blur-sm rounded-2xl shadow-soft overflow-hidden w-full max-w-sm mx-auto mb-6">
      <div className="relative w-full h-40">
        <Image src={imageUrl} alt={location} layout="fill" objectFit="cover" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-primary-text mb-1">{location}</h3>
        <p className="text-sm text-secondary-text mb-3">{address}</p>
        <div className="flex justify-between text-sm text-primary-text mb-4">
          <div>
            <span className="block text-xs text-secondary-text">تسجيل الدخول</span>
            <span>{checkInDate}</span>
          </div>
          <div>
            <span className="block text-xs text-secondary-text text-left">تسجيل الخروج</span>
            <span className="block text-left">{checkOutDate}</span>
          </div>
        </div>
        <button className="w-full bg-gradient-to-r from-pastel-blue to-pastel-purple text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:opacity-90 transition-opacity duration-200">
          التفاصيل
        </button>
      </div>
    </div>
  );
};

export default TripCard;
