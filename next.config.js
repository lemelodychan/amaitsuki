/** @type {import('next').NextConfig} */
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
  
    generateBuildId: async () => {
      // Use Vercel's unique build ID for cache invalidation
      return process.env.VERCEL_BUILD_ID || "default-build-id";
    },
  };
  
  module.exports = nextConfig;
  