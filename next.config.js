/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd ? '/apps/' : undefined,
  images: { unoptimized: true, domains: ['i.ytimg.com/'] },
};

module.exports = nextConfig;
