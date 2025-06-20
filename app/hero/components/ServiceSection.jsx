import { Home_Data } from "@/const/Data";
import { FaRegFaceSmileBeam } from "react-icons/fa6";
import MotionSection from "@/components/common/MotionSection";

const ServiceSection = () => {
  const serviceData = Home_Data.our_services;
  const splitIndex = Math.ceil(serviceData.services.length / 2);

  return (
    <section className="max">
      <div className="mx-auto py-16 flex flex-col items-center gap-5">
        <h2 className="text-4xl text-secondary font-bold uppercase">
          {serviceData.title}
        </h2>
        <MotionSection
          from={{ opacity: 0, y: 100 }}
          to={{ opacity: 1, y: 0, duration: 0.9 }}
        >
          <div className="flex md:flex-row flex-col justify-between md:gap-60 gap-8 bg-background p-8 rounded-xl">
            <div className="flex flex-col gap-8">
              {serviceData.services
                .slice(0, splitIndex)
                .map((service, index) => (
                  <div
                    className="flex flex-col gap-4 cursor-pointer group"
                    key={service.title}
                  >
                    <h3 className="inline-flex text-sm items-center gap-4 transition-all duration-300 group-hover:text-secondary">
                      <FaRegFaceSmileBeam className="text-primary" />{" "}
                      {service.title}
                    </h3>
                  </div>
                ))}
            </div>

            <div className="flex flex-col gap-8">
              {serviceData.services.slice(splitIndex).map((service, index) => (
                <div
                  className="flex flex-col gap-4 cursor-pointer group"
                  key={service.title}
                >
                  <h3 className="inline-flex text-sm items-center gap-4 transition-all duration-300 group-hover:text-secondary">
                    <FaRegFaceSmileBeam className="text-primary" />{" "}
                    {service.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </MotionSection>
      </div>
    </section>
  );
};

export default ServiceSection;
