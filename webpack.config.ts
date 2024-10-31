import webpack from 'webpack';
import buildWebpackConfig from './config/buildWebpackConfig';
import { BuildEnv, BuildMode, BuildPath } from './config/types/configTypes';
import path from 'path';

export default (env: BuildEnv) => {
  const paths: BuildPath = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: path.resolve(__dirname, 'dist'),
    htlm: path.resolve(__dirname, 'index.html'),
  };

  const mode = env.mode || BuildMode.development;
  const isDev = mode === 'development';
  const PORT = env.port || 3000;

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
  });

  return config;
};
