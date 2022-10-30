const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const production = true;

module.exports = {
  entry: ["./lib/index.ts"], //  <- Modify it to your entry name.
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(css|scss)$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|svg|woff2?|ttf|fnt|webp)$/,
        loader: "file-loader",
        options: {
          name(file) {
            return "[hash].[ext]";
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js", ".tsx"],
    fallback: {
      crypto: require.resolve("crypto-browserify"),
      stream: require.resolve("stream-browserify"),
    },
  },
  mode: "production",
  output: {
    filename: production ? "bundle.min.js" : "bundle.js",
    path: path.resolve(__dirname, "bundle"),
    globalObject: "this",
    library: "FlashPay",
    libraryExport: "default",
    libraryTarget: "umd",
  },
  optimization: {
    minimize: production,
    minimizer: [new TerserPlugin({})],
  },
};
