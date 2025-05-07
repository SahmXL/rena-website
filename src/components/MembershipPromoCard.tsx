import React from 'react';

interface MembershipPromoCardProps {
  title: string;
  description: string;
  buttonText: string;
  onButtonClick: () => void;
}

const MembershipPromoCard: React.FC<MembershipPromoCardProps> = ({ title, description, buttonText, onButtonClick }) => {
  return (
    <div className="bg-card-bg backdrop-blur-sm rounded-2xl p-6 shadow-soft w-full max-w-sm mx-auto text-center">
      {/* Placeholder for the background image/design element */}
      <div className="h-32 bg-gradient-to-br from-pastel-blue via-pastel-purple to-pastel-pink rounded-lg mb-6 flex items-center justify-center">
        <span className="text-white text-opacity-70 text-sm">[عنصر تصميم ترويجي هنا]</span>
      </div>
      <h3 className="text-xl font-bold text-primary-text mb-2">{title}</h3>
      <p className="text-secondary-text mb-6 px-4">{description}</p>
      <button 
        onClick={onButtonClick} 
        className="bg-blue-500 hover:bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto shadow-md transition-colors duration-200"
      >
        {/* Using a simple arrow for now */}
        <span>&rarr;</span>
      </button>
      {/* Placeholder for the dots indicator */}
      <div className="flex justify-center gap-1 mt-4">
        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
        <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
        <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
        <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
      </div>
    </div>
  );
};

export default MembershipPromoCard;
