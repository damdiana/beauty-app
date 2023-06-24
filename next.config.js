/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    VERCEL_URL: process.env.VERCEL_URL,
  },
  async redirects() {
    return [
      {
        source: "/profile",
        destination: "/profile/settings",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
