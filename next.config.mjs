/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
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
