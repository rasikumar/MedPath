/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // ✅ Required for static export in new Next.js
  trailingSlash: true, // ✅ Required for static export in new Next.js
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ui-avatars.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
