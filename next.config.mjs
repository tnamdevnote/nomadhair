/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        DATABASE_NAME: process.env.DATABASE_NAME,
        DATABASE_URL: process.env.DATABASE_URL,
        API_KEY: process.env.API_KEY,
        AUTH_DOMAIN: process.env.AUTH_DOMAIN
    }
};

export default nextConfig;
