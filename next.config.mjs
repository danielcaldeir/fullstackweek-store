/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      // domains: ["fsw-store.s3.sa-east-1.amazonaws.com"],
      remotePatterns: [{ hostname: "fsw-store.s3.sa-east-1.amazonaws.com" }],
    },
    // experimental: {
    //   serverActions: true,
    // },
};

export default nextConfig;
