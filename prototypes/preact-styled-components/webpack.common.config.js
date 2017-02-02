const path = require('path');

module.exports = {
  publicPath: '/assets/',
  assetsPath: path.join(__dirname, 'dist', 'assets'),
  commonLoaders:[
    {
      test: /\.jsx?$/,
      loader: 'babel',
      include: [
        path.join(__dirname),
      ],
      plugins: [
        ['transform-react-jsx', { pragma:'h' }],
      ],
    },
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      react: 'preact-compat',
      'react-dom': 'preact-compat',
      utils: path.join(__dirname, 'src', 'Utils'),
      generics: path.join(__dirname, 'src', 'Generics'),
      specifics: path.join(__dirname, 'src', 'Specifics'),
    },
  },
};
