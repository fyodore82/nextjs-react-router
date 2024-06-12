/** @type {import('next').NextConfig} */
const nextConfig = {
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
