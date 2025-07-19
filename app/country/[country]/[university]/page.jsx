import { countries } from "@/const/Data";
import UniversityLayout from "./universityTemplate/layout";
import seoData from "@/const/seoData";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const awaitedParams = await params;
  const { country: countrySlug, university: universitySlug } = awaitedParams;
  const country = countries[countrySlug];
  const university = country?.universities?.[universitySlug];
  if (!country || !university) return {};
  const seoKey = `${countrySlug}-${universitySlug}`;
  const defaultSeo = {
    title: `${university.name} - ${country.name} | MedPath Overseas`,
    description: `Study at ${university.name} in ${country.name} with MedPath Overseas. Get expert guidance for top medical universities abroad.`,
    keywords: `${university.name}, MBBS in ${country.name}, Study MBBS abroad, MedPath Overseas, ${country.name} medical universities`,
    image: "/Medpath_icon.png",
  };
  const universitySeo = seoData[seoKey] || defaultSeo;
  return {
    title: universitySeo.title,
    description: universitySeo.description,
    keywords: universitySeo.keywords,
    openGraph: {
      title: universitySeo.title,
      description: universitySeo.description,
      images: [universitySeo.image],
    },
  };
}

export async function generateStaticParams() {
  return Object.entries(countries).flatMap(([countrySlug, country]) =>
    Object.keys(country.universities || {}).map((universitySlug) => ({
      country: countrySlug,
      university: universitySlug,
    }))
  );
}

export default async function UniversityPage({ params }) {
  const awaitedParams = await params;
  const { country: countrySlug, university: universitySlug } = awaitedParams;
  const countryData = countries[countrySlug];
  if (!countryData) notFound();
  const universityData = countryData.universities?.[universitySlug];
  if (!universityData) notFound();
  return <UniversityLayout university={universityData} />;
}
