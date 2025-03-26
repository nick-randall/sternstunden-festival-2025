import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sternstunde.s3.ap-southeast-2.amazonaws.com',
        port: '',
        pathname: '/**',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'freepnglogo.com',
        port: '',
        pathname: '/images/all_img/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
