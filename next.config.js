/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        loader: "imgix",
        path: "",
      },
    output: 'export',
}

module.exports = nextConfig