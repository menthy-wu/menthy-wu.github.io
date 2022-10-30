/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    loader:"akamai",
    path:""
  },
  basePath:"/menthy-wu.github.io/",
  assetPrefix:"/menthy-wu.github.io/"
}

module.exports = nextConfig
