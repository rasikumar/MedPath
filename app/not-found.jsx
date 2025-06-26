import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-8">
      <Image
        src="/Medpath_icon.png"
        alt="MedPath Logo"
        width={100}
        height={100}
        className="mb-6"
      />
      <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
        404 - Page Not Found
      </h1>
      <p className="text-slate-500 text-lg md:text-xl mb-8 text-center max-w-lg">
        Oops! The page you are looking for does not exist.
        <br />
        If you need medical consulting or want to return to our homepage, click
        below.
      </p>
      <Link
        href="/"
        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold text-lg shadow-md transition-colors duration-200"
      >
        Go to Homepage
      </Link>
    </div>
  );
}
