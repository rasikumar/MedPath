import { getMeta } from "@/utils/getMeta";
import seoData from "@/const/seoData";
import HomePage from "./HomePage"; // separate client component

export const metadata = getMeta(seoData.home);

export default function Page() {
  return <HomePage />;
}
