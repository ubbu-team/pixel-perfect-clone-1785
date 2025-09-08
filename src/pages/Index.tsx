import React from 'react';
import HeroSection from '@/components/HeroSection';
import EducationalSection from '@/components/EducationalSection';
import GamesGrid from '@/components/GamesGrid';
import BottomSection from '@/components/BottomSection';
import CTASection from '@/components/CTASection';

const Index: React.FC = () => {
  return (
    <main className="max-w-none w-full min-h-screen relative overflow-x-hidden bg-[#D9D9D9] mx-auto max-md:max-w-[991px] max-sm:max-w-screen-sm">
      <HeroSection />
      <EducationalSection />
      <GamesGrid />
      <BottomSection />
      <CTASection />
    </main>
  );
};

export default Index;
