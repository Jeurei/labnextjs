const path = require('path');

module.exports = {
  webpack(config) {
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
    );

    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};
