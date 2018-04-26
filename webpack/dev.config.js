//    fanstackstico - it's fanstackstic!
//    Copyright (C) 2018  Esteban Murchio
//
//    This program is free software: you can redistribute it and/or modify
//    it under the terms of the GNU General Public License as published by
//    the Free Software Foundation, either version 3 of the License, or
//    (at your option) any later version.
//
//    This program is distributed in the hope that it will be useful,
//    but WITHOUT ANY WARRANTY; without even the implied warranty of
//    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//    GNU General Public License for more details.
//
//    You should have received a copy of the GNU General Public License
//    along with this program.  If not, see <https://www.gnu.org/licenses/>.

let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let WebpackNodeExternals = require('webpack-node-externals')

const webpackMode = 'development'
const webpackDevtool = 'eval-source-map'
const webpackBuildFolder = 'build'

const client = {
  mode: webpackMode,
  devtool: webpackDevtool,
  target: 'web',
  entry: {
    'client': './client/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '..', webpackBuildFolder, 'public')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        template: 'client/index.html'
      }
    )
  ]
}

const server = {
  mode: webpackMode,
  devtool: webpackDevtool,
  target: 'node',
  entry: {
    'server': './server/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '..', webpackBuildFolder)
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      }
    ]
  },
  externals: [
    WebpackNodeExternals()
  ]
}

module.exports = [client, server]
