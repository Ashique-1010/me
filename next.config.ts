import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  trailingSlash: true,
  assetPrefix: isProd ? '/me/' : '',
  basePath: isProd ? '/me' : '',
  output: 'export',
};

module.exports = nextConfig
export default nextConfig;
