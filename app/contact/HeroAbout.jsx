import { aboutheader } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";

const HeroContact = () => {
  return (
    <section className="relative w-full min-h-[220px] sm:min-h-[320px] md:min-h-[400px] lg:min-h-[500px] flex items-center justify-center">
      <Image
        src={aboutheader}
        alt="contact header image"
        className="w-full h-full object-cover"
        fill
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-2">
        <div className="flex flex-col items-center w-full max-w-2xl">
          <h1 className="text-white text-2xl sm:text-4xl md:text-6xl font-bold text-center drop-shadow-md">
            Contact Us
          </h1>
          {/* breadcrumb */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 mt-2 sm:mt-4 text-sm sm:text-base">
            <Link href={"/"} className="text-white hover:underline">
              Home
            </Link>
            <span className="text-white">/</span>
            <span className="text-primary">Contact Us</span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroContact;
