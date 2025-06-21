import { aboutpath } from "@/assets/assets";
import MotionSection from "@/components/common/MotionSection";
import { About_Page_data } from "@/const/Data";
import Image from "next/image";

const Intro = () => {
  const aboutContent = About_Page_data.aboutContents;
  return (
    <section className="max px-4 sm:px-6 lg:px-0">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row py-10 md:py-16 gap-8 md:gap-0">
        <div className="md:w-1/2 w-full flex flex-col gap-4 justify-center">
          <MotionSection>
            <span className="text-secondary font-semibold">
              {aboutContent.span}
            </span>
            <h2 className="md:text-4xl text-3xl font-bold text-primary">
              {aboutContent.title}
            </h2>
            <p className="text-sm text-text leading-6 mt-4">
              {aboutContent.description_one}
            </p>
          </MotionSection>
          <MotionSection
            to={{ opacity: 1, y: 10, duration: 1 }}
            from={{ opacity: 0, y: 100, ease: "easeInOut" }}
          >
            <Image
              src={aboutContent.image2.src}
              alt={aboutContent.image2.alt}
              className="w-full max-w-[600px] rounded-2xl object-cover"
              sizes="(max-width: 768px) 100vw, 600px"
              priority
            />
          </MotionSection>
        </div>
        <div className="md:w-1/2 w-full flex items-center justify-center mt-8 md:mt-0">
          <MotionSection
            to={{ opacity: 1, x: 0, duration: 1 }}
            from={{ opacity: 0, x: 100, ease: "easeInOut" }}
          >
            <Image
              src={aboutContent.image.src}
              alt={aboutContent.image.alt}
              className="w-full max-w-96 rounded-2xl object-cover"
              sizes="(max-width: 768px) 100vw, 384px"
              priority
            />
          </MotionSection>
        </div>
      </div>
    </section>
  );
};

export default Intro;
