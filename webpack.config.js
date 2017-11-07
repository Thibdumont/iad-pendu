const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: {
    app: './src/app/app.js',
    vendor: './src/app/vendor.js'
  },

  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, 'dist')
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor']
    }),
    new HtmlWebPackPlugin({
      template: 'src/index.html'
    }),
    new ExtractTextPlugin({
      filename: 'bundle.css',
      disable: false,
      allChunks: true
    })
  ],
  module: {
    rules: [{
      test: /\.html$/,
      include: path.resolve(__dirname, 'src/app/'),
      loader: `ngtemplate-loader?relativeTo=${__dirname}/src/app/!html-loader`
    }, {
      test: /index.html$/,
      exclude: path.resolve(__dirname, 'node_modules/'),
      use: 'html-loader?name=[name].[ext]'
    }, {
      test: /\.js$/,
      use: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader?sourceMap', 'postcss-loader?sourceMap', 'sass-loader?sourceMap'],
        publicPath: '/dist'
      })
    }, {
      test: /\.(png|jpeg|jpg|gif)$/,
      include: path.join(__dirname, 'src/app/images/'),
      use: 'file-loader?name=images/[name].[ext]&context=app/images/'
    }, {
      test: /\.json$/,
      include: path.join(__dirname, 'src/app/i18n'),
      use: 'file-loader?name=i18n/[name].[ext]&context=app/i18n/'
    },
    {
      test: /\.json$/,
      include: path.join(__dirname, 'src/app/resources'),
      use: 'file-loader?name=resources/[name].[ext]&context=app/resources/'
    }]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 9000,
    inline: true,
    compress: true,
    stats: {
      colors: true
    },
    clientLogLevel: 'info'
  },
  watchOptions: {
    aggregateTimeout: 300,
    ignored: path.resolve(__dirname, 'node_modules/')
  },
  devtool: 'source-map'
}
