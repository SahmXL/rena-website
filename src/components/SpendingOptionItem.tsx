import React from 'react';
import Image from 'next/image';

interface SpendingOptionProps {
  title: string;
  description: string;
  icon: string; // Path to the icon/image
}

const SpendingOptionItem: React.FC<SpendingOptionProps> = ({ title, description, icon }) => {
  return (
    <div className="flex items-center justify-between bg-white/80 backdrop-blur-xs rounded-lg p-4 shadow-sm mb-3">
      <div className="flex items-center">
        <div className="relative w-12 h-12 rounded-md overflow-hidden mr-4 ml-4"> {/* Added ml-4 for RTL spacing */}
          <Image src={icon} alt={title} layout="fill" objectFit="cover" />
        </div>
        <div>
          <h4 className="font-semibold text-primary-text">{title}</h4>
          <p className="text-sm text-secondary-text">{description}</p>
        </div>
      </div>
      {/* Placeholder for the three dots menu icon */}
      <div className="text-secondary-text">...</div> 
    </div>
  );
};

export default SpendingOptionItem;
