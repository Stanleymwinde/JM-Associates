import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.infrastructureLogging = {
      level: "error", // Suppress warnings
    };
    return config;
  },
};

export default nextConfig;
