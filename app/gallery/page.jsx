import { getMeta } from "@/utils/getMeta";
import seoData from "@/const/seoData";
import HeroGallery from "./Gallery";
import { galleryImages } from "@/const/Data";

export const metadata = getMeta(seoData.gallery);

const Gallery = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-8">Gallery</h1>
      <p className="text-center mb-8">
        Explore our gallery to see the vibrant moments captured at our events
        and activities.
      </p>
      <HeroGallery images={galleryImages} />
    </div>
  );
};

export default Gallery;
