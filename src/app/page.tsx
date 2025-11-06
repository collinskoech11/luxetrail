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
import ScrollAnimation from '@/components/ScrollAnimation';

export default function Page() {
  return (
    <>
      <ScrollAnimation>
        <HeroSection />
      </ScrollAnimation>
      <ScrollAnimation>
        <AboutSection />
      </ScrollAnimation>
      <ScrollAnimation>
        <TrainingSection />
      </ScrollAnimation>
      <ScrollAnimation>
        <B2BSection />
      </ScrollAnimation>
      <ScrollAnimation>
        <HireConsultantSection />
      </ScrollAnimation>
      {/* <AdvertiseSection /> */}
      <ScrollAnimation>
        <SocialCarouselSection />
      </ScrollAnimation>
      <ScrollAnimation>
        <BookSlotSection />
      </ScrollAnimation>
      <ScrollAnimation>
        <ContactSection />
      </ScrollAnimation>
    </>
  );
}