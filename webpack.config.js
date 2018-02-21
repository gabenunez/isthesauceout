const ExtractTextPlugin = require("extract-text-webpack-plugin");
 
module.exports = {
  entry: {
    bundle:["./js/src/dependencies.js", "./js/src/app.js"], 
    main:["./css/src/base.css"]
  },
  output: {
    filename: './js/[name].js'
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
  ]
}