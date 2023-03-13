/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  presets: ['next/babel', '@babel/preset-typescript'],
  trailingSlash: true,

  plugins: [['styled-components', { ssr: true, displayName: true }]],
  env: {
    test: {
      plugins: [
        [
          'styled-components',
          {
            ssr: false,
            displayName: false,
          },
        ],
      ],
    },
  },
};

module.exports = nextConfig;
