/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['drive.google.com'], // Add the domain you want to allow images from
  },
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({
  env: {
    NEXT_PUBLIC_ENV: 'PRODUCTION', // your next configs go here
  },
  ...nextConfig,
})
