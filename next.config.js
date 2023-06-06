/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    VERCEL_URL: process.env.VERCEL_URL,
  },
};

module.exports = nextConfig;
