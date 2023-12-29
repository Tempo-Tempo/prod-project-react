import webpack, { DefinePlugin, RuleSetRule } from 'webpack';
import path from 'path';
import { BuildPath } from '../build/types/config';
import { scssLoader } from '../build/loaders/scssLoader';

export default ({ config }: {config: webpack.Configuration}) => {
    const paths: BuildPath = {
        entry: '',
        html: '',
        build: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };

    if (config.module?.rules) {
        // eslint-disable-next-line
        config.module.rules = config.module?.rules?.map((rule: RuleSetRule | '...') => {
            if (rule && rule !== '...' && /svg/.test(rule.test as string)) {
                return { ...rule, exclude: /\.svg$/i };
            }

            return rule;
        });
    }

    const scssLoaders = scssLoader(true);
    config.resolve!.modules = [paths.src, 'node_modules'];
    config.resolve?.extensions?.push('.tsx', '.ts', '.js');
    config.module?.rules?.push(scssLoaders);
    config.module?.rules?.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });
    config.plugins?.push(new DefinePlugin({
        __API__: JSON.stringify(''),
        __IS_DEV__: JSON.stringify('true'),
    }));
    return config;
};
