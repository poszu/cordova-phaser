var path = require('path')
var CopyWebpackPlugin = require('copy-webpack-plugin')

const BUILD_DIR = path.resolve(__dirname, 'www')

module.exports = {
  context: __dirname,
  entry: './src/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['env']
        }
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: 'src/static'
      },
      {
        from: 'node_modules/phaser-ce/build/phaser.min.js',
        to: 'phaser.min.js'
      }
    ])
  ]
}
