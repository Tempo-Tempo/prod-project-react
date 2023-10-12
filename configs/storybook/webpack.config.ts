import webpack from 'webpack';
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
    const scssLoaders = scssLoader(true);
    config.resolve?.modules?.push(paths.src);
    config.resolve?.extensions?.push('.tsx', '.ts', '.js');
    config.module?.rules?.push(scssLoaders);
    return config;
};
