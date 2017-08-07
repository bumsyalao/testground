import webpack from 'webpack';
import path from 'path';

export default {
  devtools: 'cheap-module-eval-source-map',
  entry: path.join(__dirname, '/client/index.js'),
  output: {
    path:'/'
  },
  module: {
    loaders: [
      {
        test:/\.js$/,
        include: path.join(__dirname, 'client'),
        loaders: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.jsx', '.js']
  }
}