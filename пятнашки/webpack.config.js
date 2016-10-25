
var webpack = require('webpack');
 
module.exports = {
  entry: './main.js',
  output: {  filename: './build.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};