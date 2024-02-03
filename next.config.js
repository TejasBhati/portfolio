/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //     loader: 'imgix',
  //     path: '/',
  //   },
  images: { unoptimized: true },
  output: 'export',


    // Optional: Change the output directory `out` -> `dist`
  distDir: 'dist',
  // basePath: '/portfolio',
}

module.exports = nextConfig
