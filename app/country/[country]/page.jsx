import { countries } from "@/const/Data";
import CountryLayout from "../countryTemplate/layout";
import seoData from "@/const/seoData";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const awaitedParams = await params;
  const countryKey = awaitedParams.country;
  const country = countries[countryKey];
  if (!country) return {};
  const defaultSeo = {
    title: country.name,
    description: `Study MBBS in ${country.name} with MedPath Overseas. Get expert guidance for top medical universities abroad.`,
    keywords: `MBBS in ${country.name}, Study MBBS abroad, MedPath Overseas, ${country.name} medical universities`,
    image: "/Medpath_icon.png",
  };
  const countrySeo = seoData[countryKey] || defaultSeo;
  return {
    title: countrySeo.title,
    description: countrySeo.description,
    keywords: countrySeo.keywords,
    openGraph: {
      title: countrySeo.title,
      description: countrySeo.description,
      images: [countrySeo.image],
    },
  };
}

export async function generateStaticParams() {
  return Object.keys(countries).map((country) => ({
    country,
  }));
}

export default async function CountryPage({ params }) {
  const awaitedParams = await params;
  const country = countries[awaitedParams.country];
  if (!country) notFound();
  return <CountryLayout country={country} />;
}
