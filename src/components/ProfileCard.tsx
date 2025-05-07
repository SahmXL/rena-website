import React from 'react';
import Image from 'next/image';

interface ProfileCardProps {
  name: string;
  membershipType: string;
  nights: number;
  points: number;
  profileImage: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  membershipType,
  nights,
  points,
  profileImage,
}) => {
  return (
    <div className="bg-card-bg backdrop-blur-sm rounded-2xl p-6 shadow-soft w-full">
      <div className="flex flex-col items-center">
        <div className="relative w-24 h-24 mb-4">
          <div className="absolute inset-0 bg-profile-gradient rounded-full -z-10"></div>
          <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white">
            <Image
              src={profileImage}
              alt={name}
              fill
              className="object-cover"
            />
          </div>
        </div>
        
        <h2 className="text-xl font-bold text-primary-text mb-1">{membershipType}</h2>
        
        <div className="flex gap-4 mt-4">
          <div className="border border-pastel-blue rounded-lg px-4 py-2">
            <span className="block text-center text-primary-text">{nights} ليلة</span>
          </div>
          <div className="border border-pastel-pink rounded-lg px-4 py-2">
            <span className="block text-center text-primary-text">{points} نقطة</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
