import webpack from "webpack";
import { bulidPlugins } from "./bulidPlugins";
import { bulidRules } from "./bulidRules";
import { bulidResolve } from "./buildReslove";
import { BuildOptions } from "./types/config";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(
  options: BuildOptions
): webpack.Configuration {
  const { paths, mode, isDev } = options;
  return {
    mode: mode,
    entry: paths.entry,
    output: {
      filename: "bundle.[contenthash].js",
      path: paths.build,
      clean: true,
    },
    plugins: bulidPlugins(options),
    module: {
      rules: bulidRules(options),
    },
    resolve: bulidResolve(),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
