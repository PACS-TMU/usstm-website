/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    optimized: true,
  }
}

module.exports = nextConfig
