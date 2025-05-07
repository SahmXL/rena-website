import React from 'react';
import TripCard from '@/components/TripCard';
import BottomNav from '@/components/BottomNav';

const TripsPage = () => {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-pastel-pink via-white to-pastel-blue p-6 pb-20">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-primary-text mb-6">رحلاتي</h1>
        
        {/* Trip Tabs */}
        <div className="flex gap-4 mb-6 overflow-x-auto pb-2">
          <button className="bg-white/80 backdrop-blur-xs px-4 py-2 rounded-lg text-primary-text font-medium shadow-sm whitespace-nowrap">
            القادمة
          </button>
          <button className="bg-white/30 px-4 py-2 rounded-lg text-secondary-text font-medium whitespace-nowrap">
            السابقة
          </button>
          <button className="bg-white/30 px-4 py-2 rounded-lg text-secondary-text font-medium whitespace-nowrap">
            الملغاة
          </button>
        </div>
        
        {/* Trip Cards */}
        <div className="space-y-6">
          <TripCard 
            location="هامبورغ"
            address="شارع ABC 52، 20354 هامبورغ، ألمانيا"
            checkInDate="12.09.2020"
            checkOutDate="19.09.2020"
            imageUrl="/trip-hamburg.jpg"
          />
          
          <TripCard 
            location="ميامي"
            address="9403 كولينز أفينيو، 33150، ميامي، فلوريدا"
            checkInDate="21.11.2020"
            checkOutDate="28.11.2020"
            imageUrl="/trip-miami.jpg"
          />
        </div>
      </div>
      
      {/* Bottom Navigation */}
      <BottomNav />
    </main>
  );
};

export default TripsPage;
