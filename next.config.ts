import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: {
    appIsrStatus: false,
    buildActivity: false,
  } as any,
  output: 'export',
  trailingSlash: false,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: '/gallery.html', destination: '/gallery', permanent: true },
      { source: '/gallery/', destination: '/gallery', permanent: true },
    ];
  },
};

export default nextConfig;
