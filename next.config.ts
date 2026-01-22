import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true,
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
      {
        protocol: 'http',
        hostname: 'localhost:8080',
        port: '',
        pathname: '/get-artists',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'sternstunde.fly.dev',
        port: '',
        pathname: '/get-artists',
        search: '',
      },
    ],
  },
};

export default nextConfig;
