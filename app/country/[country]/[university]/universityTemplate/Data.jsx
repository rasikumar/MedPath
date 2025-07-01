import parse from "html-react-parser";
import Image from "next/image";

export default function Data({ data }) {
  return (
    <div>
      <Image src={data.headerImage.src} alt={data.headerImage.alt} />
      <Image src={data.mainImage.src} alt={data.mainImage.alt} />
      {parse(data.htmlcontent)}
    </div>
  );
}
