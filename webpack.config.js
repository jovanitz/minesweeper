const path = require('path');

module.exports = {
  devtool: 'eval-source-map',
  entry: path.join(__dirname, 'app/main.js'),
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name].js',
    publicPath: '/',
  },
  resolve: {
    alias: {
      views: path.resolve('app/views'),
      state: path.resolve('app/state'),
      components: path.resolve('app/components'),
      hoc: path.resolve('app/hoc'),
      img: path.resolve('app/img'),
      sass: path.resolve('sass'),
    },
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react', 'stage-2'],
        },
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
      },
    ],
  },
  devServer: {
    port: 9000,
  },
};
