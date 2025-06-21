import { getMeta } from "@/utils/getMeta";
import seoData from "@/const/seoData";
import HeroAbout from "./HeroAbout";
import Intro from "./Intro";
import { AboutPath } from "./AboutPath";
import Accomplishment from "./Accomplishment";

export const metadata = getMeta(seoData.about);
const About = () => {
  return (
    <div
      className="min-h-screen flex flex-col"
      
    >
      <HeroAbout />
      <Intro />
      <AboutPath />
      <Accomplishment />
    </div>
  );
};

export default About;
