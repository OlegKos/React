var path = require('path');
var webpack = require('webpack');
 
module.exports = {
  entry: './Script/react_import.js',
  output: { path: __dirname, filename: 'build.js' },
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