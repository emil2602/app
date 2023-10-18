import path from 'path';
import { BuildPaths } from '../build/types/config';
import webpack, { RuleSetRule } from "webpack"
import { buildCssLoader } from '../build/loaders/buildCssLoaders'

export default ({ config }: {config: webpack.Configuration }) => {
    const paths: BuildPaths = {
      html: '',
      build: '',
      entry: '',
      src: path.resolve(__dirname, '..', '..', 'src')
    }

    config.resolve?.modules?.push(paths.src)
    config.resolve?.extensions?.push('.ts', '.tsx')

    // config.module?.rules?.map((rule: RuleSetRule) => {
    //   if (/svg/.test(rule.test as string)) {
    //     return { ...rule, exclude: /\.svg$/i }
    //   }

    //   return rule
    // })

    // config.module?.rules?.push({
    //   test: /\.svg$/,
    //   use: ['@svgr/webpack']
    // })


    config.module?.rules?.push(buildCssLoader(true))

  return config
}
