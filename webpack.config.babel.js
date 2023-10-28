import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { homepage } from './package.json'

export default (env, argv) => {
  return {
    entry: './src/index.js', 
    resolve: {
      extensions: ['.js', '.jsx']
    }, 
    output: {
      path: path.resolve(process.cwd(), 'dist'),
      filename: '[name].[fullhash].js', 
      publicPath: argv.mode === 'production' ? homepage : './', 
      clean: true
    },
    devServer: {
      port: 3030, 
      hot: true
    },
    module: {
      rules: [{
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        use: ['babel-loader']
      }, {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }, {
        test: /\.(png|jpg|gif)$/i,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192,
            fallback: require.resolve('file-loader'),
          }
        }]
      }]
    },
    optimization: {
      moduleIds: 'named', 
      splitChunks: {
        chunks: 'all'
      }
    }, 
    plugins: [
      new webpack.ProvidePlugin({
        React: 'react'
      }),
      new HtmlWebpackPlugin({ 
        template: './public/index.html',
        favicon: './public/pic/favicon.png',
        title: 'AC 訊息產生器', 
        meta: {
          charset: 'utf-8', 
          viewport: 'width=device-width, initial-scale=1.0',
          author: 'AC0xRPFS001', 
          description: '一個 Discord 的訊息產生器，你可以使用它產生神似 AC0xRPFS001 這位用戶傳的訊息，但是可以自訂內容、時間、和更多細節！', 
          type: 'website'
        }, 
        alwaysWriteToDisk: true, 
        hash: true
      }),
      new MiniCssExtractPlugin()
    ]
  }
}
