"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { countryBg } from "@/assets/countryImage";
import { breadcumb_shape_1_3, h2_about_shape01 } from "@/assets/assets";
import Link from "next/link";
import Data from "./Data";
import CountryWidget from "@/components/common/CountryWidget";

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
        <header className="relative w-full min-h-[180px] sm:min-h-[260px] md:min-h-[340px] lg:min-h-[420px] flex items-center justify-center z-10 px-2 sm:px-6 md:px-10">
          <div className="absolute top-18 left-2 sm:top-20 sm:left-8 md:top-36 md:left-10 smooth-animated-element">
            <Image
              src={breadcumb_shape_1_3}
              alt="arrow-image"
              className="w-4 sm:w-10 md:w-12"
            />
          </div>
          <div className="absolute top-2 right-2 sm:top-6 sm:right-6 md:top-6 md:right-10 slide-animated-element">
            <Image
              src={h2_about_shape01}
              alt="arrow-image"
              className="w-8 sm:w-10 md:w-12"
            />
          </div>
          <div className="flex flex-col items-center w-full max-w-5xl px-2 sm:px-4">
            <h1 className="text-xl sm:text-3xl md:text-5xl text-background font-bold text-center break-words">
              {university.name}
            </h1>
            {/* breadcrumb */}
            <div className="flex flex-wrap items-center gap-1 sm:gap-3 md:gap-4 mt-2 sm:mt-4 text-xs sm:text-sm md:text-base justify-center">
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
      <main className="w-full max-w-7xl mx-auto px-2 sm:px-6 md:px-10 py-6 sm:py-8 md:py-12 space-y-10 sm:space-y-14 md:space-y-16">
        <div className="flex flex-col md:flex-row gap-10 sm:gap-16 md:gap-20 relative">
          <div className="w-full md:w-2/3">
            <Data data={university.content} />
          </div>
          <div>
            <CountryWidget />
          </div>
        </div>
      </main>
    </div>
  );
}
