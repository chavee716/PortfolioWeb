import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true, // Remove this if you are not using styled-components
  },
};

export default nextConfig;
