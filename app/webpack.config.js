const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: [
    'react-hot-loader/patch',
    './src/boot.tsx'    
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          'awesome-typescript-loader'
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlPlugin({
      template: 'public/index.html'
    }),
    new CopyPlugin([
      { from: 'staticAssets', to: 'assets' }
    ])
  ],
  devServer: {
    contentBase: './dist'
  }
};