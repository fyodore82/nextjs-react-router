/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  assetPrefix: isProd ? 'https://fyodore82.github.io/nextjs-react-router' : undefined,
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
