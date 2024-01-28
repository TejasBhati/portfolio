/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //     loader: 'imgix',
  //     path: '/',
  //   },
  images: { unoptimized: true },
  output: 'export',
  basePath: '/portfolio',
}

module.exports = nextConfig