/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'lh3.googleusercontent.com',
          },
        ],
        domains: ["res.cloudinary.com"],
      },
};

export default nextConfig;
