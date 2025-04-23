import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.infrastructureLogging = {
      level: "error", // Suppress warnings
    };
    return config;
  },
  images: {
    dangerouslyAllowSVG: true,
  remotePatterns: [
    {
      protocol: "https",
      hostname: "cms.jmassociates.co.ke",
    },
    {
      protocol: "https",
      hostname: "jmassociates.co.ke",
    }],
  },
  

 
};

export default nextConfig;
