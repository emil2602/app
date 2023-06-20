import webpack from "webpack";
import path from "path";

import { BuildOptions } from "./types/config";

import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { builResolvers } from "./buildResolers";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const { mode, paths } = options;

  return {
    mode: mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders()
    },
    resolve: builResolvers(),
    devtool: 'inline-source-map',
    devServer: buildDevServer(options)
  }
}