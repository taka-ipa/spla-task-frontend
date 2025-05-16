/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true, // ← App Router使うとき必須！
  },
};

export default nextConfig;

