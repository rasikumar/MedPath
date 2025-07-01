import {
  ABOUT_ROUTE,
  CONTACT_ROUTE,
  GALLERY_ROUTE,
  KAZAKHSTAN_ROUTE,
  KYRGYZSTAN_ROUTE,
  RUSSIA_ROUTE,
  UNIVERSITIES_ROUTE,
  UZBEKISTAN_ROUTE,
  VIETNAM_ROUTE,
} from "@/utils/routes";
import { Footerbg, Footershape1, Footershape2 } from "../../assets/assets";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { socialmediaLinks } from "@/const/Data";

const ContactInfo = [
  {
    icon: <FaPhoneAlt className="text-white text-xl" />,
    title: "Call us any time:",
    value: "+91 73057 02699",
    link: "tel:+91 73057 02699",
  },
  {
    icon: <FaEnvelope className="text-white text-xl" />,
    title: "Email us 24/7 hours:",
    value: "omedpath@gmail.com",
    link: "mailto:omedpath@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt className="text-white text-xl" />,
    title: "Our Office Location:",
    value: "Madurai, Tamil Nadu",
    link: "https://www.google.com/maps/place/Medpath+overseas+-+Abroad+MBBS+Consultant/@9.9640774,78.1400157,858m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3b00c7e9200f0c29:0xdcb56583f5f70025!8m2!3d9.9640774!4d78.1400157!16s%2Fg%2F11xcrqjx7q?entry=tts&g_ep=EgoyMDI1MDYyMy4yIPu8ASoASAFQAw%3D%3D&skid=a0bd048d-d3e9-4ab0-b5f5-184d358b281a",
  },
];

const Footer = () => {
  return (
    <footer className="relative text-white overflow-hidden bg-[#0B0B45]">
      <div
        className="absolute inset-0 w-full h-full opacity-20 pointer-events-none bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${Footerbg.src})` }}
      />

      <div className="relative z-10">
        <div className="absolute inset-0 pointer-events-none z-0" />
        <div className="relative max-w-7xl mx-auto px-6 pt-10 pb-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-right md:text-left border-b border-blue-900/30 pb-8">
            {ContactInfo.map((item, index) => (
              <div
                key={index}
                className={`flex items-center gap-4 justify-between md:justify-start ${
                  index < ContactInfo.length - 1
                    ? "md:border-r md:border-blue-900/30 md:pr-8"
                    : ""
                }`}
              >
                <div className="relative w-16 h-16 flex-shrink-0">
                  <div className="absolute inset-0 bg-[#0d6efd]/20 rounded-full z-[1]" />
                  <div className="relative w-full h-full rounded-full bg-[#0d6efd]/10 backdrop-blur-sm flex items-center justify-center z-[3] ">
                    {item.icon}
                  </div>
                  <span className="absolute slide-animated-element -top-2 -left-2 w-8 h-8 rounded-full bg-[#0d6efd] transform -translate-x-1/12 -translate-y-1/6 z-[2]" />
                  <span className="absolute slide-animated-element -bottom-2 -right-2 w-9 h-9 rounded-full bg-[#0d6efd] transform translate-x-1/12 translate-y-1/4 z-[2]" />
                </div>
                <div className="md:text-left ">
                  <p className="text-sm text-gray-300 mb-1">{item.title}</p>
                  <Link
                    href={item.link || ""}
                    className="font-semibold text-white"
                  >
                    {item.value}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="relative z-10 w-[98%] md:w-[80%] mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-3 gap-16 text-sm group overflow-hidden rounded-lg mt-8"
        style={{
          background: `url(${Footerbg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div>
          <div className="w-full mb-6 flex items-center">
            <Image
              src="/MedpathsloganLogo.png"
              alt="Study Doctor Logo"
              width={220}
              height={64}
              className="h-16 w-auto"
              priority
            />
          </div>
          <p className="text-background mb-6 text-base">
            THE SOUTH INDIAN REPRESENTATIVE
            <br />
            FOR MEDICAL UNIVERSITIES ABROAD.
          </p>
          <p className="text-background font-bold mb-4">FOLLOW US ON:</p>
          <div className="flex space-x-4">
            <a
              href={socialmediaLinks.instagram}
              className="relative w-8 h-8 group"
            >
              <div className="absolute inset-0 bg-[#0d6efd]/20 rounded-full hover:bg-[#0d6efd] transition-colors" />
              <div className="relative w-full h-full rounded-full bg-[#0d6efd]/10 backdrop-blur-sm flex items-center justify-center">
                <FaInstagram className="text-white text-lg" />
              </div>
            </a>
            <a
              href={socialmediaLinks.facebook}
              className="relative w-8 h-8 group"
            >
              <div className="absolute inset-0 bg-[#0d6efd]/20 rounded-full hover:bg-[#0d6efd] transition-colors" />
              <div className="relative w-full h-full rounded-full bg-[#0d6efd]/10 backdrop-blur-sm flex items-center justify-center">
                <FaFacebookF className="text-white text-lg" />
              </div>
            </a>
            <a
              href={socialmediaLinks.linkedin}
              className="relative w-8 h-8 group"
            >
              <div className="absolute inset-0 bg-[#0d6efd]/20 rounded-full hover:bg-[#0d6efd] transition-colors" />
              <div className="relative w-full h-full rounded-full bg-[#0d6efd]/10 backdrop-blur-sm flex items-center justify-center">
                <FaLinkedinIn className="text-white text-lg" />
              </div>
            </a>
            <a
              href={socialmediaLinks.youtube}
              className="relative w-8 h-8 group"
            >
              <div className="absolute inset-0 bg-[#0d6efd]/20 rounded-full hover:bg-[#0d6efd] transition-colors" />
              <div className="relative w-full h-full rounded-full bg-[#0d6efd]/10 backdrop-blur-sm flex items-center justify-center">
                <FaYoutube className="text-white text-lg" />
              </div>
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-6 relative">
            Quick Links
            <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#0d6efd]"></span>
          </h3>
          <ul className="space-y-3 text-gray-300">
            <li>
              <Link href="/" className="hover:text-[#0d6efd] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                href={ABOUT_ROUTE}
                className="hover:text-[#0d6efd] transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href={CONTACT_ROUTE}
                className="hover:text-[#0d6efd] transition-colors"
              >
                Contact us
              </Link>
            </li>
            <li>
              <Link
                href={KYRGYZSTAN_ROUTE}
                className="hover:text-[#0d6efd] transition-colors"
              >
                MBBS in Kyrgyzstan
              </Link>
            </li>
            <li>
              <Link
                href={KAZAKHSTAN_ROUTE}
                className="hover:text-[#0d6efd] transition-colors"
              >
                MBBS in Kazakhstan
              </Link>
            </li>
            <li>
              <Link
                href={RUSSIA_ROUTE}
                className="hover:text-[#0d6efd] transition-colors"
              >
                MBBS in Russia
              </Link>
            </li>
            <li>
              <Link
                href={UZBEKISTAN_ROUTE}
                className="hover:text-[#0d6efd] transition-colors"
              >
                MBBS in Uzbekistan
              </Link>
            </li>
            <li>
              <Link
                href={VIETNAM_ROUTE}
                className="hover:text-[#0d6efd] transition-colors"
              >
                MBBS in Vietnam
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-6 relative">
            Resources
            <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-[#0d6efd]"></span>
          </h3>
          <ul className="space-y-3 text-gray-300 mb-8">
            <li>
              <Link
                href={GALLERY_ROUTE}
                className="hover:text-[#0d6efd] transition-colors"
              >
                Gallery
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <Image
        src={Footershape1.src}
        alt="footerImage1"
        width={100}
        height={100}
        className="absolute left-10 top-20 pointer-events-none smooth-animated-element"
      />

      <Image
        src={Footershape2.src}
        alt="footerImag2"
        width={100}
        height={100}
        className="absolute right-10 bottom-20 pointer-events-none smooth-animated-element"
      />

      <div className="relative z-10 text-center text-gray-400 text-sm py-4 border-t border-blue-900/30">
        Copyright {new Date().getFullYear()} MedPath overseas, All Rights
        Reserved.
      </div>
    </footer>
  );
};

export default Footer;
