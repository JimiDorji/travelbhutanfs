/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  trailingSlash: true,
  images: {
    domains: ['images.unsplash.com', 'amen-api.flamingoitstudio.net', "www.amenbhutan.com"],
  },
}

module.exports = nextConfig

