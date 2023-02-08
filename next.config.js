/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['tailwindui.com', 'c1.neweggimages.com']
  },
}

module.exports = nextConfig
