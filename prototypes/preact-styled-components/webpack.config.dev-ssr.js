const { publicPath, assetsPath, commonLoaders, resolve } = require('./webpack.common.config');
const path = require('path');
const nodeExternals = require('webpack-node-externals');

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
    rules: commonLoaders,
  },
  resolve,
  devtool: 'inline-source-map',
};
