/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)", // Match all routes
        headers: [
          {
            key: "Cache-Control",
            value: "no-store, must-revalidate", // Force fresh data on every request
          },
        ],
      },
    ];
  },

  // Generate a unique build ID for cache invalidation
  generateBuildId: async () => {
    return process.env.VERCEL_BUILD_ID || "default-build-id";
  },

  // SCSS Configuration
  sassOptions: {
    silenceDeprecations: ['legacy-js-api'],
  },

};

module.exports = nextConfig;