import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  serverExternalPackages: [],
  transpilePackages: ['lucide-react'],
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = config.externals || [];
    }
    return config;
  },
};

export default nextConfig;
