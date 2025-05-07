import UserProfileSection from "@/components/UserProfileSection";
import BottomNav from "@/components/BottomNav";

export default function Home() {
  return (
    <main className="relative pb-20"> {/* Add padding-bottom to avoid overlap with fixed BottomNav */}
      {/* Render the User Profile Section */}
      <UserProfileSection />
      
      {/* Render the Bottom Navigation */}
      <BottomNav />
    </main>
  );
}

