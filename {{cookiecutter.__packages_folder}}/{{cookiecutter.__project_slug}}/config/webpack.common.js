const path = require('path');

module.exports = {
  ignoreWarnings: [(warning) => true],
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-react', { runtime: 'automatic' }],
              '@babel/preset-env',
              '@babel/preset-typescript',
            ],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
      {
        test: /\.(s*)css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader?name=src/core/assests/images/[name].[ext]',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [
      '.tsx',
      '.ts',
      '.js',
      '.json',
      '.scss',
      '.png',
      '.jpg',
      '.jpeg',
      '.svg',
    ],
    alias: {
      '@api': path.resolve('src/api'),
      '@core': path.resolve('src/core'),
      '@custom_types': path.resolve('src/custom_types'),
      '@hooks': path.resolve('src/hooks'),
      '@lib': path.resolve('src/lib'),
      '@ui': path.resolve('src/ui'),
      '@constants': path.resolve('src/constants'),
      '@i18n': path.resolve('src/i18n'),
    },
  },
};
