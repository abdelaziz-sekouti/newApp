/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  basePath: '/next-app',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
