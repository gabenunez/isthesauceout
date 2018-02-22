const ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    bundle:["./js/src/dependencies.js", "./js/src/app.js"], 
    main:["./css/src/base.css"]
  },
  output: {
    path: path.join(__dirname, '/_site/'),
    filename: './js/[name].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("./css/main.css"),
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: __dirname + '/index.html',
    }),
  ]
}