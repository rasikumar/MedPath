import { widget } from "@/assets/assets";
import Image from "next/image";
import Button from "../ui/Button";
import { ABOUT_ROUTE } from "@/utils/routes";
import { FaRightLong } from "react-icons/fa6";
import Link from "next/link";

function CountryWidget() {
  return (
    <div className="sticky top-[20vh] w-96">
      <div className="relative">
        <div className="relative h-[30rem] w-full rounded-xl overflow-hidden">
          <Image
            src={widget}
            alt="widget image"
            className="object-cover"
            quality={100}
            fill
          />
          <div className="absolute inset-0 bg-blue-500/90 z-10"></div>
        </div>
        <div className="absolute z-10  flex flex-col items-center justify-center top-0 m-auto h-full w-full">
          <div className="bg-[#ffffff45] p-10 pb-5 rounded-xl">
            <h2 className="text-white text-2xl font-bold text-center mb-6 leading-tight">
              Need Help? We Are <br /> Here To Help You
            </h2>
            <div className="bg-white p-4 rounded-xl  w-full">
              <Image
                src="/MedpathsloganLogo.png"
                alt="logo"
                width={150}
                height={100}
                className="m-auto"
              />
            </div>
            <div className="text-white text-lg font-semibold text-center mb-1">
              You Get Free Consultancy
            </div>
            <div className="text-white text-lg font-bold text-center mb-6">
              +91 7305702699
            </div>
          </div>
          <div className="absolute bottom-16 text-white group overflow-hidden">
            <Link
              href={ABOUT_ROUTE}
              className="bg-secondary px-10 py-3 inline-flex gap-4 items-center hover:bg-secondary/80 cursor-pointer relative"
            >
              Contact Us Now
              <span className="group-hover:-right-10 right-3 absolute transition-all duration-200">
                <FaRightLong />
              </span>
              <span className="group-hover:left-3 -left-10 absolute transition-all duration-200">
                <FaRightLong />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryWidget;
