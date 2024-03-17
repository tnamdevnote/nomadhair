/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        DATABASE_NAME: process.env.DATABASE_NAME
    }
};

export default nextConfig;
