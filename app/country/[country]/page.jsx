import { countries } from "@/const/Data";
import CountryLayout from "../countryTemplate/layout";

export async function generateStaticParams() {
  return Object.keys(countries).map((country) => ({
    country,
  }));
}

export default async function CountryPage({ params }) {
  const resolvedParams = await params;
  const country = countries[resolvedParams.country];

  if (!country) {
    return (
      <div className="container mx-auto py-12 text-center">
        <h1 className="text-3xl font-bold">Country not found</h1>
        <p className="mt-4">
          The requested Country does not exist in our records
        </p>
      </div>
    );
  }

  return <CountryLayout country={country} />;
}
