/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "api.dicebear.com", // For avatar placeholders
      "picsum.photos", // For image placeholders
    ],
  },
};

export default nextConfig;
