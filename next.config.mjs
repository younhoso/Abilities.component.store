/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    // ssr 및 displayName은 기본적으로 구성됩니다.
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
    ],
  },
};

export default nextConfig;
