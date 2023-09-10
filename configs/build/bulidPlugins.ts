import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { BuildOptions } from "./types/config";
import MinicssExtractPlugin from "mini-css-extract-plugin"

export function bulidPlugins({paths}: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new MinicssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename:  'css/[name].[contenthash:8].css',
    })
  ];
}
