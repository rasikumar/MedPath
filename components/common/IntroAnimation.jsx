import { useEffect, useRef, useState } from "react";

export default function IntroSplash({ onFinish }) {
  const loadingBarRef = useRef(null);
  const loadingBoxRef = useRef(null);
  const splashScreenRef = useRef(null);
  const loadingCircleRef = useRef(null);

  useEffect(() => {
    // Animate loadingBar (move from left: -100% to left: 0)
    if (loadingBarRef.current) {
      loadingBarRef.current.style.transition = "left 3s ease";
      setTimeout(() => {
        loadingBarRef.current.style.left = "0";
      }, 1500);
    }

    // Fade in loadingBox opacity from 0 to 1
    if (loadingBoxRef.current) {
      loadingBoxRef.current.style.transition = "opacity 1s ease";
      setTimeout(() => {
        loadingBoxRef.current.style.opacity = "1";
      }, 500);
    }

    // After delay, animate splashScreen moving up and fade out loadingCircle
    setTimeout(() => {
      if (splashScreenRef.current) {
        splashScreenRef.current.style.transition = "top 1.5s ease";
        splashScreenRef.current.style.top = "-100%";
      }
      if (loadingCircleRef.current) {
        loadingCircleRef.current.style.transition = "opacity 0.5s ease";
        loadingCircleRef.current.style.opacity = "0";
      }
    }, 4500);

    // After splash is hidden, call onFinish to remove splash from DOM
    const finishTimeout = setTimeout(() => {
      onFinish();
    }, 6000); // enough time for all animations

    return () => clearTimeout(finishTimeout);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        ref={splashScreenRef}
        className="absolute top-0 left-0 w-full h-screen bg-white border-b-4 border-black overflow-hidden"
        style={{ top: "0" }}
      >
        <div className="w-[400px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center overflow-hidden">
          <div
            ref={loadingBoxRef}
            className="opacity-0"
          >
            <img
              src="https://vignette.wikia.nocookie.net/borderlands/images/4/42/Vault_logo.png/revision/latest?cb=20100114181536"
              alt="Logo"
              className="w-1/2 mx-auto mb-12"
            />
            <div className="relative w-full bg-gray-200 h-2.5 overflow-hidden">
              <div
                ref={loadingBarRef}
                className="absolute top-0 left-[-100%] h-2.5 bg-black"
                style={{ width: "100%" }}
              />
            </div>
            <div className="relative w-[75px] h-[75px] bg-white rounded-full mx-auto mt-8 overflow-hidden">
              <div className="absolute left-1/2 top-1/2 w-[60px] h-[60px] bg-white rounded-full -translate-x-1/2 -translate-y-1/2 z-10"></div>
              <div
                ref={loadingCircleRef}
                className="absolute right-1/2 bottom-1/2 w-[75px] h-[75px] bg-gradient-to-b from-black to-transparent origin-bottom-right animate-spin"
                style={{ animationDuration: "1.5s", animationTimingFunction: "linear", animationIterationCount: "infinite" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Optional behind layers */}
      <div className="absolute top-0 left-0 w-full h-screen bg-red-600 z-[-1]"></div>
      <div className="absolute top-0 left-0 w-full h-screen bg-white z-[-2]"></div>
    </div>
  );
}
