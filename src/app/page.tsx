'use client';
import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import TrainingSection from '@/components/home/TrainingSection';
import B2BSection from '@/components/home/B2BSection';
import HireConsultantSection from '@/components/home/HireConsultantSection';
import AdvertiseSection from '@/components/home/AdvertiseSection';
import SocialCarouselSection from '@/components/home/SocialCarouselSection';
import BookSlotSection from '@/components/home/BookSlotSection';
import ContactSection from '@/components/home/ContactSection';

export default function Page() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <TrainingSection />
      <B2BSection />
      <HireConsultantSection />
      <AdvertiseSection />
      <SocialCarouselSection />
      <BookSlotSection />
      <ContactSection />
    </>
  );
}