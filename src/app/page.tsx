'use client';
import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import TrainingSection from '@/components/home/TrainingSection';
import CourseDetailsSection from '@/components/home/CourseDetailsSection';
import B2BSection from '@/components/home/B2BSection';
import HireConsultantSection from '@/components/home/HireConsultantSection';
import AdvertiseSection from '@/components/home/AdvertiseSection';
import { SocialCarouselSection } from '@/components/home/SocialCarouselSection';
import BookSlotSection from '@/components/home/BookSlotSection';
import ContactSection from '@/components/home/ContactSection';
import ReviewsSection from '@/components/home/ReviewsSection';
import ScrollAnimation from '@/components/ScrollAnimation';

export default function Page() {
  return (
    <>
      <div id="hero">
        <ScrollAnimation>
          <HeroSection />
        </ScrollAnimation>
      </div>
      <div id="about">
        <ScrollAnimation>
          <AboutSection />
        </ScrollAnimation>
      </div>
      <div id="training">
        <ScrollAnimation>
          <TrainingSection />
        </ScrollAnimation>
      </div>
      <div id="course-details">
        <ScrollAnimation>
          <CourseDetailsSection />
        </ScrollAnimation>
      </div>
      <div id="b2b">
        <ScrollAnimation>
          <B2BSection />
        </ScrollAnimation>
      </div>
      <div id="hire">
        <ScrollAnimation>
          <HireConsultantSection />
        </ScrollAnimation>
      </div>
      {/* <AdvertiseSection /> */}
      <div id="social">
        <ScrollAnimation>
          <SocialCarouselSection />
        </ScrollAnimation>
      </div>
      <div id="book">
        <ScrollAnimation>
          <BookSlotSection />
        </ScrollAnimation>
      </div>
      <div id="reviews">
        <ScrollAnimation>
          <ReviewsSection />
        </ScrollAnimation>
      </div>
      <div id="contact">
        <ScrollAnimation>
          <ContactSection />
        </ScrollAnimation>
      </div>
    </>
  );
}