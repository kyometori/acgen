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
        alwaysWriteToDisk: true
      }),
      new MiniCssExtractPlugin()
    ]
  }
}
