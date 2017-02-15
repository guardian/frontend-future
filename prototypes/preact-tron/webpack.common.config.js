const path = require('path');

module.exports = {
  publicPath: '/assets/',
  assetsPath: path.join(__dirname, 'dist', 'assets'),
  commonLoaders:[
    {
      test: /\.jsx?$/,
      exclude: /(node_modules)/,
      use: 'babel-loader',
    },
    {
      test: /\.yml$/,
      loader: 'yml-loader',
    },
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.yml'],
    mainFields: ['main'],
    alias: {
      react: 'preact-compat',
      'react-dom': 'preact-compat',
      utils: path.join(__dirname, 'src', 'Utils'),
      generics: path.join(__dirname, 'src', 'Generics'),
      specifics: path.join(__dirname, 'src', 'Specifics'),
      ds: path.join(__dirname, 'src', 'DesignSpecs'),
    },
  },
};
