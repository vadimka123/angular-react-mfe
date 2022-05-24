const fs = require("fs");
const path = require("path");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const appDirectory = fs.realpathSync(process.cwd());
const webpackEnv = process.env.NODE_ENV || 'development';

module.exports = {
  // target: ['browserslist'],
  mode: webpackEnv,
  devtool: webpackEnv === 'production'
    ? 'source-map'
    : 'cheap-module-source-map',
  entry: ['./src/index.tsx'],
  output: {
    path: path.resolve(appDirectory, 'build'),
    filename: webpackEnv === 'production' ? 'static/js/[name].[contenthash:8].js' : 'static/js/bundle.js',
    chunkFilename: webpackEnv === 'production'
      ? 'static/js/[name].[contenthash:8].chunk.js'
      : 'static/js/[name].chunk.js',
    assetModuleFilename: 'static/media/[name].[hash][ext]',
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx'],
    fallback: { url: false },
  },
  experiments: {
    outputModule: true
  },
  plugins: [
    new ModuleFederationPlugin({
      library: { type: "module" },
      name: 'mfe3',
      filename: 'remoteEntry.js',
      exposes: {
        './Module': './src/hotels/hotels_search/HotelsSearch.tsx'
      },
      remotes: {},
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(appDirectory, 'public/index.html'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                require.resolve('babel-preset-react-app'),
                {
                  runtime: 'automatic',
                },
              ],
            ]
          },
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|svg|ico|gif|mp3)$/i,
        type: 'asset/resource',
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    },
    compress: true,
    port: 3002,
  },
};
