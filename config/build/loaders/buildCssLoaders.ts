import MiniCssExtractPlugin from 'mini-css-extract-plugin'

interface CssLoaderConfig {
  test: RegExp
  use: Array<string | object>
}

export function buildCssLoader (isDev: boolean): CssLoaderConfig {
  return {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath?.includes('.module.')),
            localIdentName: isDev ? '[name]__[local]--[hash:base64:5]' : '[hash:base64:8]'
          }
        }
      },
      'sass-loader'
    ]
  }
}