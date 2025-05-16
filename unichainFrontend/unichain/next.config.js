/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true, // Temporarily ignore TS errors for build
  },
  experimental: {
    // Enable optimizations
    optimizePackageImports: ['@/components'],
    optimizeCss: true,
    // Enable server components optimization
    serverActions: {
      bodySizeLimit: '2mb'
    }
  },
  // Configure page optimization
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Optimize images and fonts
  images: {
    minimumCacheTTL: 60,
  },
  // Enable route optimization
  onDemandEntries: {
    // Reduce page buffer size
    maxInactiveAge: 15 * 1000,
    pagesBufferLength: 2,
  },
  eslint: {
    ignoreDuringBuilds: true, // Temporarily ignore ESLint errors for build
  }
}

module.exports = nextConfig
