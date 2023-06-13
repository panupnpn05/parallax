/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/parallax',
          permanent: true,
        },
      ]
    },
  }
