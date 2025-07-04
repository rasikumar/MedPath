import UniversitySubmitForm from "@/components/forms/UniversitSumbitForm";
import parse from "html-react-parser";
import Image from "next/image";

export default function Data({ data }) {
  return (
    <div className="p-8 border border-border shadow flex flex-col gap-8">
      <h2 className="text-3xl font-bold text-primary">
        {data.universitiesname}
      </h2>
      <Image
        src={data.headerImage.src}
        alt={data.headerImage.alt}
        className="rounded-xl"
        width={800}
        height={400}
      />
      <Image
        src={data.mainImage.src}
        alt={data.mainImage.alt}
        className="rounded-xl"
        width={800}
        height={400}
      />

      {/* Container with comprehensive HTML element styling */}
      <div className="rich-text-content">
        {parse(data.htmlcontent, {
          replace: (domNode) => {
            // You can add specific handling for any elements here if needed
            return domNode;
          },
        })}
      </div>

      <UniversitySubmitForm university={data.universitiesname} />

      <style jsx global>{`
        /* Base styles for all HTML elements in the content */
        .rich-text-content {
          line-height: 1.6;
          color: #333;
        }

        .rich-text-content h1,
        .rich-text-content h2,
        .rich-text-content h3,
        .rich-text-content h4,
        .rich-text-content h5,
        .rich-text-content h6 {
          margin-top: 1.5em;
          margin-bottom: 0.5em;
          font-weight: bold;
          color: #111;
        }

        .rich-text-content h1 {
          font-size: 2em;
        }
        .rich-text-content h2 {
          font-size: 1.5em;
        }
        .rich-text-content h3 {
          font-size: 1.25em;
        }

        .rich-text-content p {
          margin-bottom: 1em;
        }
        .rich-text-content ol {
          list-style-type: decimal;
        }
        .rich-text-content ul {
          list-style-type: disc;
        }
        .rich-text-content ol,
        .rich-text-content ul {
          margin: 1em 0;
          padding-left: 2em;
        }

        .rich-text-content li {
          margin-bottom: 0.5em;
        }

        .rich-text-content a {
          color: #0066cc;
          text-decoration: underline;
        }

        .rich-text-content img {
          max-width: 100%;
          height: auto;
          margin: 1em 0;
        }

        .rich-text-content table {
          border-collapse: collapse;
          width: 100%;
          margin: 1em 0;
        }

        .rich-text-content th,
        .rich-text-content td {
          border: 1px solid #ddd;
          padding: 8px;
        }

        .rich-text-content th {
          background-color: #f2f2f2;
        }

        .rich-text-content blockquote {
          border-left: 4px solid #ddd;
          padding-left: 1em;
          margin: 1em 0;
          color: #666;
        }
      `}</style>
    </div>
  );
}
