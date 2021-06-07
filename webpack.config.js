const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const { NODE_ENV } = process.env

module.exports = {
  entry: './src/index.tsx',
  stats: { errorDetails: true },
  devServer: {
    contentBase: './dist',
    hot: true,
    open: true
  },
  devtool: 'inline-source-map',
  mode: NODE_ENV === 'production' ? NODE_ENV : 'development',
  target: 'web',
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
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        exclude: /node_modules/,
        use: 'ts-loader'
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
