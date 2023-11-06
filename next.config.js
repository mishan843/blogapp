/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    domains: ['drive.google.com'], // Add the domain you want to allow images from
  },
}

module.exports = nextConfig
