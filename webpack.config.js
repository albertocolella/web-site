const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
  mode: "development",
  //context: path.resolve(__dirname, 'src'),
  entry: "./src/sass/style.scss",
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'style.css'
  },
  module: {
    rules: [
     /* {
        test: /\.scss$/,
        loader: extractCSS.extract(['css-loader','sass-loader']),
        exclude: [path.resolve('node_modules')]
      },*/
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it uses publicPath in webpackOptions.output
    //          publicPath: '../',
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
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
