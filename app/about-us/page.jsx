import { getMeta } from "@/utils/getMeta";
import seoData from "@/const/seoData";
import HeroAbout from "./HeroAbout";

export const metadata = getMeta(seoData.about);
const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <HeroAbout />
    </div>
  );
};

export default About;
