const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  },
  images: {
    domains: ['i.pravatar.cc', 'cdn.pixabay.com', 'images.unsplash.com'],
  },
};

module.exports = nextConfig;
