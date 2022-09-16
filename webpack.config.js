// const path = require("path");
//
// module.exports = {
//   entry: "./lib/main.ts",
//   output: {
//     filename: "bundle.js",
//     path: path.resolve(__dirname, "dist"),
//   },
//   resolve: {
//     fallback: {
//       "crypto": require.resolve("crypto-browserify"),
//       "stream": require.resolve("stream-browserify"),
//     },
//     extensions: [".ts", ".js"]
//   },
//   module: {
//     rules: [
//       {
//         test: /\.ts$/,
//         use: "ts-loader",
//         include: path.resolve(__dirname, "lib"),
//       },
//     ],
//   },
// };


const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const production = true;

module.exports = {
  entry: ['./lib/index.ts'],  //  <- Modify it to your entry name.
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
    fallback: {
      "crypto": require.resolve("crypto-browserify"),
      "stream": require.resolve("stream-browserify"),
    },
  },
  mode: 'production',
  output: {
    filename: production ? 'bundle.min.js' : 'bundle.js',
    path: path.resolve(__dirname, 'bundle'),
    globalObject: 'this',
    library: 'FlashPay',
    libraryExport: 'default',
    libraryTarget: 'umd'
  },
  optimization: {
    minimize: production,
    minimizer: [
      new TerserPlugin({})
    ]
  }
};
