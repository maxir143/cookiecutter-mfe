const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const { ModuleFederationPlugin } = require('webpack').container;
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const devConfig = {
  mode: 'development',
  output: {
    publicPath: 'http://127.0.0.1:{{cookiecutter.project_port}}/',
  },
  devServer: {
    compress: false,
    port: "{{cookiecutter.project_port}}",
    host: '0.0.0.0',
    historyApiFallback: {
      index: '/index.html',
    },
    hot: true,
    allowedHosts: 'all',
  },
  watchOptions: {
    poll: 500, // Or you can set a value in milliseconds.
  },
  plugins: [
    new Dotenv({
      path: './.env.development',
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
          singleton: true,
          requiredVersion: packageJson.dependencies['react'],
        },
        'react-dom': {
          singleton: true,
          requiredVersion: packageJson.dependencies['react-dom'],
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
