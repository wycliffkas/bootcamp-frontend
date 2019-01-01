const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

const mode = process.env.NODE_ENV || "production";

const config = {
  mode,
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/"
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.s?css/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(jpe?g|png|gif|svg|jpg|otf)$/i,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};

module.exports = config;

