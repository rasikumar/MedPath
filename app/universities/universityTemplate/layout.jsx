import Image from "next/image";
import { countryBg } from "@/assets/countryImage";
import IntroSection from "./IntroSection";
// import AdmissionsSection from "./AdmissionsSection";
// import CampusSection from "./CampusSection";
// import ResearchSection from "./ResearchSection";

export default function CountryLayout({ country }) {
  return (
    <div>
      {/* Header */}
      <div className="relative w-full min-h-[120px] sm:min-h-[220px] md:min-h-[300px] flex items-center justify-center">
        <Image
          src={countryBg}
          alt="contact header image"
          className="w-full h-full object-cover"
          fill
          priority
          sizes="100vw"
        />
        <header className="absolute inset-0 flex justify-center items-center">
          <h1 className="text-3xl font-bold text-text text-center">
            {country.name}
          </h1>
        </header>
      </div>
      <main className="container mx-auto px-4 py-8 space-y-16">
        <IntroSection data={country.intro} />
      </main>
    </div>
  );
}
