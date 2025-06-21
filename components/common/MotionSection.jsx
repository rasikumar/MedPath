"use client";
import { useRef, useLayoutEffect, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MotionSection = ({
  children,
  from = { opacity: 0, x: -100 },
  to = { opacity: 1, x: 0, duration: 1 },
  className = "",
  trigger = true,
}) => {
  const sectionRef = useRef(null);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useLayoutEffect(() => {
    if (hasMounted && trigger) {
      gsap.fromTo(sectionRef.current, from, {
        ...to,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }
  }, [hasMounted, from, to, trigger]);

  if (!hasMounted) return null;

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  );
};

export default MotionSection;
