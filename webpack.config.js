const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
  mode: "development",
  context: path.resolve(__dirname, 'src'),
  resolve: {
    alias: {
        '@scss': path.resolve(__dirname, 'src/sass/'),
        '@fonts': path.resolve(__dirname, 'src/fonts'),
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@': path.resolve(__dirname, 'src')
    },
    modules: [
        'node_modules',
        path.resolve(__dirname, 'src')
    ],
    //extensions: ['.js', '.ts']
  },
  entry: "./js/main.js",
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: './js/bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 9000
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: [/.js$/],
        exclude: /(node_modules)/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: [
                    '@babel/preset-env'
                ]
            }
        }
      },
      {
        test: /\.scss$/,
        exclude: /(node_modules)/,
        use: [
          /*{
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it uses publicPath in webpackOptions.output
              publicPath: (resourcePath, context) => {
                // publicPath is the relative path of the resource to the context
                // e.g. for ./css/admin/main.css the publicPath will be ../../
                // while for ./css/main.css the publicPath will be ../
                return path.relative(path.dirname(resourcePath), context) + '/';
              },
              hmr: process.env.NODE_ENV === 'development',
              reloadAll: true,
            },
          },*/
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.svg$/,
        exclude: /(node_modules)/,
        loader: 'svg-inline-loader'
      }
    ],
  },
  plugins: [
    /*new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),*/
    new CopyWebpackPlugin([
        { from: 'index.html' },
        { from: 'assets/favicon.ico' },
        { from: 'assets/robots.txt' },
        { from: 'assets/sitemap.xml' },
        {  context:'fonts',
          from: '**/*',
          dot: true
          , to: 'fonts/' }
    ])
  ]
}

module.exports = config;
