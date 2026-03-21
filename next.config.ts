import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  trailingSlash: true,
  assetPrefix: '/me/',
  basePath: '/me',
  output: 'export',
};

export default nextConfig;
