"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { countryBg } from "@/assets/countryImage";
import { breadcumb_shape_1_3, h2_about_shape01 } from "@/assets/assets";
import Link from "next/link";
import Data from "./Data";

export default function UniversityLayout({ university }) {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Header */}
      <div className="relative w-full min-h-[120px] sm:min-h-[220px] md:min-h-[300px] flex items-center justify-center">
        <div
          style={{
            transform: `translateY(${-offsetY * 0.1}px)`,
            transition: "transform 0.1s linear",
            willChange: "transform",
          }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={countryBg}
            alt="contact header image"
            className="w-full h-full object-cover bg-secondary"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <header className="relative w-full min-h-[220px] sm:min-h-[320px] md:min-h-[400px] lg:min-h-[500px] flex items-center justify-center z-10">
          <div className="absolute top-36 left-10 smooth-animated-element">
            <Image
              src={breadcumb_shape_1_3}
              alt="arrow-image"
              className="md:w-12"
            />
          </div>
          <div className="absolute top-6 right-10 slide-animated-element">
            <Image
              src={h2_about_shape01}
              alt="arrow-image"
            />
          </div>
          <div className="flex flex-col items-center w-full max-w-5xl">
            <h1 className="md:text-5xl text-2xl text-background font-bold">
              {university.name}
            </h1>
            {/* breadcrumb */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 mt-2 sm:mt-4 text-sm sm:text-base">
              <a href="/" className="text-background hover:underline">
                Home
              </a>
              <span className="text-background">/</span>
              <Link
                href={`/country/${university.countrySlug}`}
                className="text-background hover:underline"
              >
                {university.countryName}
              </Link>
              <span className="text-background">/</span>
              <span className="text-primary">{university.name}</span>
            </div>
          </div>
        </header>
      </div>
      <main className="container mx-auto px-4 py-8 space-y-16">
        <Data data={university.content} />
        {/* <IntroSection data={country.intro} />
        <WhyStudy data={country.why_study} />
        <FoodAccomdation data={country.accomadation} /> */}
      </main>
    </div>
  );
}
