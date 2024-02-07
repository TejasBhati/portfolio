/** @type {import('next').NextConfig} */
const nextConfig = {

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
       
      },
    ],
  },

 

  output: "export",  // <=== enables static exports
  reactStrictMode: true,


 // basePath: '/portfolio',
}

module.exports = nextConfig
