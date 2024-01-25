/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.nicepng.com',
                port: '',
                pathname: '/png/full/933-9332131_profile-picture-default-png.png',
            }
        ],
    }
};

export default nextConfig;
