const { publicPath, assetsPath, commonLoaders, resolve } = require('./webpack.common.config');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  name: 'SSR',
  context: path.join(__dirname),
  entry: './ssr.js',
  output: {
    path: assetsPath,
    filename: 'ssr.js',
    libraryTarget: 'commonjs2',
    publicPath,
  },
  target: 'node',
  externals: nodeExternals(),
  module: {
    loaders: commonLoaders.concat([
      {
        test: /\.scss$/,
        include: path.join(__dirname),
        loader:  ExtractTextPlugin.extract('style-loader', 'css-loader?module&camelCase=dashes&localIdentName=[name]__[local]___[hash:base64:5]!sass-loader'),
      },
    ]),
  },
  plugins: [
    new ExtractTextPlugin('style.css', { allChunks: true }),
  ],
  resolve,
};
