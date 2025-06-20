'use client';

import IntroSplash from "@/components/common/IntroAnimation";
import { useState } from "react";
import HeroSection from "./hero/components/heroSection";
import OurUniversity from "./hero/components/OurUniversity";
import AboutSection from "./hero/components/AboutSection";
import Testimonials from "./hero/components/Testimonials";
import FreeConsult from "./hero/components/FreeConsult";
import ServiceSection from "./hero/components/ServiceSection";
import WhyChooseSection from "./hero/components/WhyChooseSection";
import AreYouReadySection from "./hero/components/AreYouReadySection";
import PartnersSections from "./hero/components/PartnersSections";
import StudentTestimonials from "./hero/components/StudentTestimonials";
import FaqSection from "./hero/components/FaqSection";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {/* {showSplash && <IntroSplash onFinish={() => setShowSplash(false)} />}
      {!showSplash && ( 
      */}
       <>
          <HeroSection />
          <OurUniversity />
          <AboutSection />
          <Testimonials />
          <FreeConsult />
          <ServiceSection />
          <WhyChooseSection />
          <AreYouReadySection />
          <PartnersSections />
          <StudentTestimonials />
          <FaqSection />
        </>
    </>
  );
}
