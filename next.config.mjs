/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  assetPrefix: isProd ? '/nextjs-react-router' : undefined,
  distDir: 'docs',
  async rewrites() {
    return [
      {
        source: '/:catchAll*',
        destination: '/',
      },
    ]
  },
};

export default nextConfig;
