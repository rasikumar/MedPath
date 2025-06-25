import { countries } from "@/const/Data";
import UniversityLayout from "../universityTemplate/layout";

export async function generateStaticParams() {
  return Object.keys(countries).map((slug) => ({
    slug,
  }));
}

export default async function UniversityPage({ params }) {
  const resolvedParams = await params;
  const country = countries[resolvedParams.slug];

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

  return <UniversityLayout country={country} />;
}
