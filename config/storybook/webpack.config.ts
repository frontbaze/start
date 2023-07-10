import webpack, { RuleSetRule } from 'webpack';
import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { BuildPaths } from '../types/config';

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };
  config.resolve?.modules?.push(paths.src);
  config.resolve?.extensions?.push('.ts', '.tsx');

  if (!config.module) {
    throw new Error('config module undefined');
  } else {
    // eslint-disable-next-line no-param-reassign, prefer-arrow-callback, func-names
    config.module.rules = config.module?.rules?.map(
      (rule: RuleSetRule | '...') => {
        if (typeof rule !== 'string' && /svg/.test(rule.test as string)) {
          return { ...(rule as object), exclude: /\.svg$/i };
        }

        return rule;
      },
    );
  }

  config.module.rules?.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });
  config.module.rules?.push(buildCssLoader(true));

  return config;
};
