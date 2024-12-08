import type { NextConfig } from "next";

// const NEXT_PUBLIC_BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
// destination: `${NEXT_PUBLIC_BACKEND_URL}/api/:path*/`,

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: `/api/:path*`,
        destination: `http://host.docker.internal:5000/api/:path*/`,

      },
    ];
  },
};

export default nextConfig;
