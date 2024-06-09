import * as cfg from "react";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      }
    ],
  },

  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    if (cfg.cache && !dev) {
      cfg.cache = Object.freeze({
        type: 'memory',
      })
      cfg.cache.maxMemoryGenerations = 0
    }
    // Important: return the modified config
    return config
  },
  async redirects() {
    return [
      // Basic redirect
      {
        source: '/',
        destination: '/dashboard',
        permanent: false,
      },
    ]
  },
};

export default nextConfig;
