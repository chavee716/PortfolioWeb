import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  // This makes sure JSX is transformed correctly
  experimental: {
    esmExternals: 'loose', // This might help with module resolution issues
  }
};

export default nextConfig;