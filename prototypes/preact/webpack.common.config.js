const path = require('path');

module.exports = {
  publicPath: '/assets/',
  assetsPath: path.join(__dirname, 'dist', 'assets'),
  commonLoaders:[
    {
      test: /\.jsx?$/,
      loader: 'babel-loader',
      include: [
        path.join(__dirname),
        path.join(__dirname, '..', 'data.js'),
      ],
      options: {
        plugins: [
          ['transform-react-jsx', { pragma:'h' }],
        ],
      },
    },
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
