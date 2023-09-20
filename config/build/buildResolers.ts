import type webpack from 'webpack'
import { type BuildOptions } from './types/config'

export function builResolvers (options: BuildOptions): webpack.ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [
      options.paths.src, 'node_modules'
    ],
    alias: {},
    mainFiles: ['index']
  }
}
