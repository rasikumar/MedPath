import { getMeta } from "@/utils/getMeta";
import seoData from "@/const/seoData";
import HeroContact from "./HeroAbout";
import ContactDetails from "./ContactDetails";
import Map from "./Map";

export const metadata = getMeta(seoData.contact);
const Contact = () => {
  return (
    <div>
      <HeroContact />
      <ContactDetails />
      <Map />
    </div>
  );
};

export default Contact;
