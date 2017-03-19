const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const extractCSS = new ExtractTextPlugin('[name].css');

const config = {
  //context: path.resolve(__dirname, 'src'),
  entry: "./src/sass/style.scss",
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'style.css'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        loader: extractCSS.extract(['css-loader','sass-loader']),
        exclude: [path.resolve('node_modules')]
      },

    ]
  },
  plugins: [
    extractCSS,
    new CopyWebpackPlugin([
        { from: 'src/index.html' },
        { from: 'src/assets/favicon.ico' },
        { from: 'src/assets/robots.txt' },
        { from: 'src/assets/sitemap.xml' },
        {  context:'src/fonts',
          from: '**/*',
          dot: true
          , to: 'fonts/' }
    ])
  ]
}

module.exports = config;
