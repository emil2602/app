import webpack  from 'webpack';

export function builResolvers(): webpack.ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js']
  }
}
