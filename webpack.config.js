var path = require("path");
var webpack = require("webpack");
module.exports = {
  entry: {
    app: './app/app.jsx'
  },
  target: 'web',
  watch: true,
  debug: true,
  output: {
    path: path.join(__dirname, "dist/js"),
    publicPath: "dist/js/",
    filename: "[name].js",
    chunkFilename: "[chunkhash].js"
  },
  module: {
    loaders: [
      { test: /\.jsx?$/,
        loader: "babel-loader",
        query: {
          presets: ['react', 'es2015']
        }
      },
      { test: /\.scss$/,   loaders: ["style", "css", "sass"] },
      { test: /\.woff$/,   loader: "url-loader?prefix=font/&limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf$/,    loader: "file-loader?prefix=font/" },
      { test: /\.eot$/,    loader: "file-loader?prefix=font/" }

    ]
  }
};
