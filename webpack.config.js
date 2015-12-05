var path = require("path");
var webpack = require("webpack");
module.exports = {
  entry: {
    app: './app/js/app'
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
      { test: /\.jsx$/,    loader: "jsx-loader?insertPragma=React.DOM&harmony=true" },
      { test: /\.js$/,     loader: "jsx-loader?harmony=true" },
      { test: /\.scss$/,   loaders: ["style", "css", "sass"] },
      { test: /\.woff$/,   loader: "url-loader?prefix=font/&limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf$/,    loader: "file-loader?prefix=font/" },
      { test: /\.eot$/,    loader: "file-loader?prefix=font/" }

    ]
  },
    resolve: {
        alias: {
            // Bind version of jquery
            jquery: "jquery-2.0.3",

            // Bind version of jquery-ui
            "jquery-ui": "jquery-ui-1.10.3",

            // jquery-ui doesn't contain a index file
            // bind module to the complete module
            "jquery-ui-1.10.3$": "jquery-ui-1.10.3/ui/jquery-ui.js",
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            // Automtically detect jQuery and $ as free var in modules
            // and inject the jquery library
            // This is required by many jquery plugins
            jQuery: "jquery",
            $: "jquery"
        })
    ]
};