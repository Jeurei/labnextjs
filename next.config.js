/* eslint-disable no-param-reassign */
const path = require('path');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  images: {
    domains: ['labdiag-prod.praweb.ru'],
  },
  webpack(config, { isServer }) {
    if (!isServer) {
      config.node = {
        fs: 'empty',
      };
    }
    config.module.rules.push(
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        issuer: {
          test: /\.(js|ts)x?$/,
        },
        use: [
          'babel-loader',
          {
            loader: '@svgr/webpack',
            options: {
              svgoConfig: {
                pretty: true,
                multipass: true,
                plugins: [
                  { sortAttrs: true },
                  { removeDimensions: true },
                  { removeStyleElement: true },
                  { removeAttrs: { attrs: '(xmlns.*)' } },
                ],
              },
              semi: false,
              singleQuote: true,
              icon: true,
            },
          },

          'url-loader',
        ],
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
      },
      {
        test: /\.(png|jpg|gif|eot|ttf|woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000,
          },
        },
      },
    );

    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
});
