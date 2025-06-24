"use client";
import { aboutbg, aboutpath, scale } from "@/assets/assets";
import { About_Page_data } from "@/const/Data";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export const AboutPath = () => {
  const tabData = About_Page_data.aboutTabData;
  const tabs = ["mission", "vision", "goal"];
  const [activeTab, setActiveTab] = useState("mission");
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef();

  // Auto-change tab every 5 seconds
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActiveTab((prev) => {
        const idx = tabs.indexOf(prev);
        return tabs[(idx + 1) % tabs.length];
      });
      setAnimating(true);
    }, 5000);
    return () => clearInterval(timerRef.current);
  }, []);

  useEffect(() => {
    setAnimating(true);
    const timeout = setTimeout(() => setAnimating(false), 300);
    return () => clearTimeout(timeout);
  }, [activeTab]);

  const handleTabClick = (tab) => {
    if (tab !== activeTab) {
      setActiveTab(tab);
      setAnimating(true);
      clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        setActiveTab((prev) => {
          const idx = tabs.indexOf(prev);
          return tabs[(idx + 1) % tabs.length];
        });
        setAnimating(true);
      }, 5000);
    }
  };

  return (
    <section
      className="max mx-auto pt-10 sm:pt-16"
      style={{
        backgroundImage: `url(${aboutbg}) `,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full flex justify-center">
        <Image
          src={aboutpath}
          alt="aboutspath"
          className="w-full h-auto object-contain"
          priority
        />
      </div>
      <div className="max-w-5xl mx-auto py-12 mt-14 sm:px-6 md:px-8 flex flex-col gap-8 relative">
        <div className="flex mb-8 absolute md:-top-[40%] -top-[9%]">
          <Image src={scale} alt="scale-image"  className="-z-10 top-0" />
        </div>
        <div className="flex justify-center gap-2 sm:gap-4 mb-8 relative ">
          <ul className="flex gap-2 sm:gap-4 justify-evenly w-full">
            {tabs.map((tab) => (
              <li key={tab} className="flex items-center flex-col gap-2">
                <button
                  className={`p-2 rounded-full border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary ${
                    activeTab === tab
                      ? "bg-primary text-background border-primary"
                      : "bg-background text-border border-border"
                  }`}
                  onClick={() => handleTabClick(tab)}
                  type="button"
                  aria-label={`Show ${tab} content`}
                />
                <span
                  className={`font-semibold text-sm sm:text-base capitalize ${
                    activeTab === tab ? "text-primary" : "text-secondary"
                  }`}
                >
                  {tab}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap- px-4 ">
          <div className="w-full md:w-1/2 h-64 sm:h-80 md:h-96 flex-shrink-0 overflow-hidden">
            <div
              className={`w-full h-full transition-all duration-300 ${
                animating ? "fade-anim" : ""
              }`}
            >
              <Image
                src={tabData[activeTab].image.src}
                alt={`${activeTab} illustration`}
                className="mx-auto mb-4 object-cover w-full h-full rounded-lg"
                fill={false}
                priority
              />
            </div>
          </div>
          <div className="text-sm sm:text-base text-text w-full md:w-1/2 mt-6 md:mt-0">
            <div
              className={`transition-all duration-300 flex flex-col justify-center gap-6 ${
                animating ? "fade-anim" : ""
              }`}
            >
              <h2 className="text-3xl font-600 text-primary">
                {tabData[activeTab].title}
              </h2>
              {tabData[activeTab].content.split("..").map((part, idx, arr) => (
                <span key={idx} className="">
                  {part.trim()}
                  {idx < arr.length - 1 && (
                    <>
                      .<br />
                    </>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
