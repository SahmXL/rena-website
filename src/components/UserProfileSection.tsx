import React from 'react';
import ProfileCard from '@/components/ProfileCard';
import SpendingOptionItem from '@/components/SpendingOptionItem';

// Placeholder for profile image
const profileImagePath = '/profile-placeholder.jpg';

// Placeholder for spending option icons
const spaIconPath = '/icons/spa.jpg';
const foodIconPath = '/icons/food.jpg';
const upgradeIconPath = '/icons/upgrade.jpg';

const UserProfileSection = () => {
  return (
    <div className="bg-gradient-to-br from-pastel-pink via-white to-pastel-blue min-h-screen p-6">
      <div className="max-w-md mx-auto">
        {/* Profile Card */}
        <ProfileCard 
          name="محمد أحمد"
          membershipType="عضو بلاتيني"
          nights={150}
          points={763}
          profileImage={profileImagePath}
        />
        
        {/* Spending Options Section */}
        <div className="mt-8">
          <h3 className="text-xl font-bold text-primary-text mb-4">خيارات الإنفاق</h3>
          
          {/* Spending Options Tabs */}
          <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
            <button className="bg-white/80 backdrop-blur-xs px-4 py-2 rounded-lg text-primary-text font-medium shadow-sm whitespace-nowrap">
              سبا
            </button>
            <button className="bg-white/30 px-4 py-2 rounded-lg text-secondary-text font-medium whitespace-nowrap">
              طعام
            </button>
            <button className="bg-white/30 px-4 py-2 rounded-lg text-secondary-text font-medium whitespace-nowrap">
              ترقية
            </button>
            <button className="bg-white/30 px-4 py-2 rounded-lg text-secondary-text font-medium whitespace-nowrap">
              مواصلات
            </button>
          </div>
          
          {/* Spending Option Items */}
          <div className="space-y-3">
            <SpendingOptionItem 
              title="علاج عطري بالخزامى"
              description="علاج عطري"
              icon={spaIconPath}
            />
            <SpendingOptionItem 
              title="سباحة مع الزهور"
              description="علاج عطري"
              icon={spaIconPath}
            />
            <SpendingOptionItem 
              title="علاج بالزيوت"
              description="علاج عطري"
              icon={spaIconPath}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileSection;
