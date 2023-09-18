import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { BuildOptions } from "./types/config";
import MinicssExtractPlugin from "mini-css-extract-plugin"
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');


export function bulidPlugins({paths, isDev}: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new MinicssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename:  'css/[name].[contenthash:8].css',
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev)
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
  ];
}
