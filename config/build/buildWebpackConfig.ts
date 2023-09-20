import type webpack from 'webpack'

import { type BuildOptions } from './types/config'

import { buildPlugins } from './buildPlugins'
import { buildLoaders } from './buildLoaders'
import { builResolvers } from './buildResolers'
import { buildDevServer } from './buildDevServer'

export function buildWebpackConfig (options: BuildOptions): webpack.Configuration {
  const { mode, paths, isDev } = options

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options)
    },
    resolve: builResolvers(options),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined
  }
}
