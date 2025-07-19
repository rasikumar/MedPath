"use client";
import MotionSection from "@/components/common/MotionSection";
import { UseIntersection } from "@/components/common/useIntersection";
import CountUp from "react-countup";

const Accomplishment = () => {
  const { ref, isIntersecting } = UseIntersection({
    threshold: 0.1,
    triggerOnce: false,
  });
  return (
    <section
      ref={ref}
      className="max center max-md:flex-col gap-16 md:px-0 px-4 pb-24"
    >
      <MotionSection
        from={{ opacity: 0, y: 100, ease: "easeInOut" }}
        to={{ opacity: 1, y: 0, duration: 1 }}
      >
        <div className="center-between md:gap-20">
          <div>
            {isIntersecting && (
              <div className="center-column text-center gap-2">
                <div className="md:text-4xl text-xl font-bold text-secondary ">
                  <CountUp end={500} duration={5} /> +
                </div>
                <span className="text-primary ">Successfully Graduated</span>
              </div>
            )}
          </div>
          <div>
            {isIntersecting && (
              <div className="center-column text-center gap-2">
                <div className="md:text-4xl text-xl font-bold text-secondary">
                  <CountUp end={11} duration={10} /> k+
                </div>
                <span className="text-primary ">Application completed</span>{" "}
              </div>
            )}
          </div>
          <div>
            {isIntersecting && (
              <div className="center-column text-center gap-2">
                <div className="md:text-4xl text-xl font-bold text-secondary">
                  <CountUp end={5} duration={10} /> k+{" "}
                </div>
                <span className="text-primary ">Student Community</span>{" "}
              </div>
            )}
          </div>
        </div>
      </MotionSection>
    </section>
  );
};

export default Accomplishment;
