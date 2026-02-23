/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: [
    'https://bb221f39-6f4f-459c-af59-642e51947ba1-00-1d2wi1rqv2upz.riker.replit.dev',
  ],
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Cache-Control', value: 'no-cache, no-store, must-revalidate' },
        ],
      },
    ];
  },
};

export default nextConfig;
