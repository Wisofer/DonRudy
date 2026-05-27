/** @type {import('next').NextConfig} */
const nextConfig = {
  // Standalone output optimizado para Docker / Dokploy / Nixpacks
  output: 'standalone',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  devIndicators: false,
}

export default nextConfig
