import { countries } from "@/const/Data";
import UniversityLayout from "./universityTemplate/layout";

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
  if (!countryData) {
    return (
      <div className="container mx-auto py-12 text-center">
        <h1 className="text-3xl font-bold">Country not found</h1>
        <p className="mt-4">
          The requested country does not exist in our records
        </p>
      </div>
    );
  }

  const universityData = countryData.universities?.[universitySlug];
  if (!universityData) {
    return (
      <div className="container mx-auto py-12 text-center">
        <h1 className="text-3xl font-bold">University not found</h1>
        <p className="mt-4">
          The requested university does not exist in {countryData.name}
        </p>
      </div>
    );
  }

  return <UniversityLayout university={universityData} />;
}
