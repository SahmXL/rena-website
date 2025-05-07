'use client';

import React from 'react';
import MembershipPromoCard from '@/components/MembershipPromoCard';
import BottomNav from '@/components/BottomNav';

const MembershipPage = () => {
  const handleButtonClick = () => {
    // Placeholder for button click action
    console.log('Become a member button clicked');
    alert('سيتم توجيهك لصفحة التسجيل قريباً!'); // You will be redirected to the registration page soon!
  };

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-pastel-pink via-white to-pastel-blue p-6 pb-20 flex items-center justify-center">
      <div className="max-w-md w-full">
        <MembershipPromoCard 
          title="كن عضواً"
          description="فندق هامبورغ هو ملاذ حديث للمسافرين بغرض العمل والترفيه."
          buttonText="→"
          onButtonClick={handleButtonClick}
        />
      </div>
      {/* Optional: Include BottomNav if it should appear on this page */}
      <BottomNav />
    </main>
  );
};

export default MembershipPage;
