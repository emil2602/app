import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BuildOptions } from './types/config';


export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  return [
    {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    },
    {
      test: /\.s[ac]ss$/i,
      use: [
        options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        {
          loader: "css-loader",
          options: {
            modules: {
              auto: (resPath: string) => Boolean(resPath?.includes('.module.')),
              localIdentName: options.isDev ? '[name]__[local]--[hash:base64:5]' : '[hash:base64:8]'
            }
          }
        },
        "sass-loader",
      ],
    },
  ]
}