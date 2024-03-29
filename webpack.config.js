const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack');
require('dotenv').config();

module.exports = {
  mode: 'development',
    entry: {
      bundle: path.resolve(__dirname, './src/index.js')
  },
  experiments: {
  topLevelAwait: true
  },
  output: {
    filename: '[name][contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    assetModuleFilename: '[name][ext]'
  },
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist')
    },
    port: 3000,
    open: true,
    hot: true, 
    compress: true, 
    historyApiFallback: true
  },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [
            'style-loader', 
            'css-loader'
          ]
        },
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader'
          ]
        },
         {
         test: /\.(png|svg|jpg|jpeg|gif)$/i,
         type: 'asset/resource',
        },
        {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        },
        {
        test: /\.(csv|tsv)$/i,
        use: ['csv-loader']
        },
        {
        test: /\.xml$/i,
        use: ['xml-loader']
        },
      ]
   },
   plugins: [
       new HtmlWebpackPlugin({
           title: 'weather-app',
           filename: 'index.html',
           template: 'src/template.html'
       }),
       new webpack.DefinePlugin({
        'process.env.OPENWEATHER_KEY': JSON.stringify(process.env.OPENWEATHER_KEY),
      }),
   ]
}

