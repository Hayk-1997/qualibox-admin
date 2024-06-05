/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async redirects() {
    return [
      // Basic redirect
      {
        source: '/',
        destination: '/dashboard',
        permanent: false,
      },
    ]
  },
};

export default nextConfig;
