const path                   = require('path')
const HtmlWebpackPlugin      = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const { NODE_ENV } = process.env

module.exports = {
  entry: './src/index.js',
  devServer: {
    contentBase: './dist',
    hot: true,
    open: true
  },
  devtool: 'inline-source-map',
  mode: NODE_ENV === 'production' ? NODE_ENV : 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ]
  }
}
