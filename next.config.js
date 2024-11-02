/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true
  },
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/szekelydata' : ''
}

module.exports = nextConfig
