"use client";
import {
  aboutbg,
  choose_shape,
  Footershape1,
  h2_about_shape01,
} from "@/assets/assets";
import ContactForm from "@/components/forms/ContactForm";
import { socialmediaLinks } from "@/const/Data";
import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { FaFacebook, FaInstagram } from "react-icons/fa6";
import Link from "next/link";

const ContactDetails = () => {
  return (
    <section className="relative">
      <Image src={aboutbg} alt="about-bg" className="absolute -z-10" />
      <Image
        src={choose_shape}
        alt="choose_shape"
        className="absolute max-md:opacity-0 -z-10 left-0 bottom-0 opacity-20"
      />
      <Image
        src={choose_shape}
        alt="choose_shape"
        className="absolute -z-10 right-0 top-0 opacity-10 rotate-180"
      />
      <Image
        src={h2_about_shape01}
        alt="h2_about_shape01"
        className="absolute md:top-20 max-md:bottom-10 md:left-12 right-0 smooth-animated-element"
      />
      <Image
        src={Footershape1}
        alt="Footershape1"
        className="absolute top-56 left-[30%] slide-animated-element opacity-10"
      />
      <div className="max max-md:px-4 md:py-32 py-12 relative max-md:gap-16 z-50 flex flex-col md:flex-row md:items-center gap-16">
        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-4 text-blue-900">
            Contact Details
          </h2>
          <div className="flex items-center gap-6">
            <IoLocationOutline />
            <address className="not-italic text-lg mb-4 leading-relaxed">
              Rainbow apartment, <br /> Meenakshi Nagar Rd, <br />
              Iyer Bungalow to Moondrumavadi Main Rd, Kannanenthal, <br />
              Madurai, Tamil Nadu 625014
            </address>
          </div>
          <a
            href={socialmediaLinks.email}
            className="text-blue-600 mb-2 break-all flex items-center gap-6"
          >
            <MdOutlineMailOutline />
            <span className="text-xl">omedpath@gmail.com </span>
          </a>
          <a
            href={socialmediaLinks.whatsapp}
            className="text-green-600 flex items-center gap-6"
          >
            <FiPhoneCall />
            <span className="text-xl">+91 7305702699</span>
          </a>
          <div className="flex gap-4 mt-6">
            <Link href={socialmediaLinks.facebook} target="_blank">
              <FaFacebook className="text-blue-600 text-4xl hover:scale-110 transition-all duration-300" />
            </Link>
            <Link href={socialmediaLinks.instagram} target="_blank">
              <FaInstagram className="text-rose-600 text-4xl hover:scale-110 transition-all duration-300" />
            </Link>
          </div>
        </div>
        <div className="flex-1">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
