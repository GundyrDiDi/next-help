/** @type {import('next').NextConfig} */
const { SERVER_ENV } = process.env;

const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: '@svgr/webpack',
    })
    return config
  },
};

export default nextConfig;
