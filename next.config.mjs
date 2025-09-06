/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig

// const isProd = process.env.NODE_ENV === 'production';

// module.exports = {
//   basePath: isProd ? '/p-5' : '',
//   assetPrefix: isProd ? '/p-5/' : '',
//   images: {
//     unoptimized: true,
//   },
//   trailingSlash: true,
// };
