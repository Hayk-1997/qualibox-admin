
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['localhost'],
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/dashboard',
        permanent: true,
      },
    ]
  },
};

module.exports = nextConfig;
