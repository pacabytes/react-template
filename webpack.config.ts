import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from "html-webpack-plugin";

const config: webpack.Configuration = {
  mode: 'development',
  entry: './src/index.tsx',
  module: {
    rules: [{
      test: /\.tsx?$/,
      exclude: [path.resolve(__dirname, "node_modules")],
      loader: "babel-loader"
    }]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'foo.bundle.js'
  },
  plugins: [new HtmlWebpackPlugin()]
};

export default config;
