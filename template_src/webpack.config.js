var path = require('path')
var CopyWebpackPlugin = require('copy-webpack-plugin')

const BUILD_DIR = path.resolve(__dirname, 'www')
const PHASER_DIR = path.join(__dirname, '/node_modules/phaser-ce/')
const phaser = path.join(PHASER_DIR, 'build/custom/phaser-split.js')
const pixi = path.join(PHASER_DIR, 'build/custom/pixi.js')
const p2 = path.join(PHASER_DIR, 'build/custom/p2.js')

module.exports = {
  context: __dirname,
  entry: {
    app: ['babel-polyfill', path.resolve(__dirname, './src/index.js')],
    vendor: ['pixi', 'p2', 'phaser']
  },
  output: {
    pathinfo: true,
    path: BUILD_DIR,
    filename: '[name].js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.join(__dirname, 'src')
      },
      { test: /pixi\.js/, use: ['expose-loader?PIXI'] },
      { test: /phaser-split\.js$/, use: ['expose-loader?Phaser'] },
      { test: /p2\.js/, use: ['expose-loader?p2'] }
    ]
  },
  resolve: {
    alias: {
      phaser: phaser,
      pixi: pixi,
      p2: p2
    }
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: 'src/static'
      }
    ])
  ]
}
