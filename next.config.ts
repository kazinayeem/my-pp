import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "cdn.jsdelivr.net",
      "raw.githubusercontent.com",
      "avatars.githubusercontent.com",
    ], // External image domains
  },
};

export default nextConfig;
