import Image from "next/image";
import { TiTick } from "react-icons/ti";

export default function IntroSection({ data }) {
  const aboutUsData = data?.about || {};
  return (
    <div className="bg-white flex flex-col lg:flex-row gap-7 p-4 md:p-6 lg:p-8">
      <div className="w-full lg:w-[60%] flex flex-col justify-center items-start space-y-6 md:space-y-8 lg:space-y-10">
        <div className="space-y-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-primary font-bold">
            {data.title}
          </h2>
          <ul className="space-y-2 md:space-y-3">
            {data.points.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <div>
                  <TiTick className="text-green-500 mt-1 text-xl md:text-2xl" />
                </div>
                <span className="text-sm md:text-base text-secondary font-medium">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-primary font-bold">
            {aboutUsData.title}
          </h2>
          <ul className="space-y-2 md:space-y-3">
            {aboutUsData.points.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <div>
                  <TiTick className="text-green-500 mt-1 text-xl md:text-2xl" />
                </div>
                <span className="text-sm md:text-base text-secondary font-medium">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-full lg:w-[40%] mt-6 lg:mt-0">
        <Image
          src={data.image.src}
          alt={data.image.alt}
          width={600}
          height={400}
          className="rounded-xl w-full h-auto object-cover"
        />
      </div>
    </div>
  );
}
