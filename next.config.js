/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: false,
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@swc/helpers': require.resolve('@swc/helpers')
    };
    return config;
  }
};

module.exports = nextConfig;