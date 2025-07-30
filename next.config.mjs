/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
<<<<<<< HEAD
    domains: ['placeholder.svg'],
=======
>>>>>>> cb47be20f51742e05a368a655026f2b6ec1cafe2
    unoptimized: true,
  },
}

export default nextConfig
