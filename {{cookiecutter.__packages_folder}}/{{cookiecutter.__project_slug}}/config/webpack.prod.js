const { merge } = require('webpack-merge');
const Dotenv = require('dotenv-webpack');
const { ModuleFederationPlugin } = require('webpack').container;
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/{{cookiecutter.__name}}/',
  },
  plugins: [
    new Dotenv({
      path: './.env.production',
    }),
    new ModuleFederationPlugin({
      name: '{{cookiecutter.__name.replace("-", "")}}',
      filename: 'remoteEntry.js',
      exposes: {
        './{{cookiecutter.__name.title().replace("-", "")}}': './src/App',
      },
      shared: {
        ...packageJson.dependencies,
        react: {
          // react
          singleton: true,
          requiredVersion: packageJson.dependencies['react'],
        },
        'react-dom': {
          // react-dom
          singleton: true,
          requiredVersion: packageJson.dependencies['react-dom'],
        },
      },
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
