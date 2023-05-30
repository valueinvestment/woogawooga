/** @type {import('next').NextConfig} */
const withPlugins = require("next-compose-plugins");
const withPWA = require("next-pwa");

const nextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  swcMinify: true,
};

module.exports = withPlugins(
  [
    [
      withPWA,
      {
        pwa: {
          dest: "public",
        },
        withDarkMode: false,
      },
    ],
    // 추가 플러그인 작성
  ],
  nextConfig
);
