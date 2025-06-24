"use client";
import ContactForm from "@/components/forms/ContactForm";
import { socialmediaLinks } from "@/const/Data";

const ContactDetails = () => {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-[60vh] bg-white rounded-lg shadow-md overflow-hidden">
      <div className="flex-1 max-w-md mx-auto flex flex-col justify-center items-start bg-gray-50 md:bg-transparent border-b md:border-b-0 md:border-r border-gray-200">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">
          Contact Details
        </h2>
        <address className="not-italic text-gray-700 mb-4 leading-relaxed">
          Groundfloor, <br /> 471, W First Cross St, <br />
          Mellur, KK Nagar, <br />
          Madurai, Tamil Nadu 625020
        </address>
        <a
          href={socialmediaLinks.email}
          className="block text-blue-600 hover:underline mb-2 break-all"
        >
          <span>omedpath@gmail.com </span>
        </a>
        <a
          href={socialmediaLinks.whatsapp}
          className="block text-green-600 hover:underline font-semibold"
        >
          +91 7305702699
        </a>
      </div>
      <div className="flex-1 max-w-2xl mx-auto p-6 ">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactDetails;
