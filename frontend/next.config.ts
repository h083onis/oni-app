import type { NextConfig } from "next";

const NEXT_PUBLIC_BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: `/api/:path*`,
        destination: `${NEXT_PUBLIC_BACKEND_URL}/api/:path*/`,
      },
    ];
  },
};

export default nextConfig;
