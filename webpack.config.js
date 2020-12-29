const { join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  target: 'web',
  entry: join(__dirname, './src/index.js'),
  output: {
    path: join(__dirname, './dist'),
    filename: 'bundle.[fullhash].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        use: ['html-loader'],
      },
      {
        test: /\.scss$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.svg$/i,
        use: ['file-loader'],
      },
    ],
  },
  devServer: {
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
      template: join(__dirname, './src/index.html'),
      // favicon: join(__dirname, './src/assets/icon.ico'),
    }),
  ],
};
