import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sternstunde.s3.ap-southeast-2.amazonaws.com',
        port: '',
        pathname: '/2024_photos/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
