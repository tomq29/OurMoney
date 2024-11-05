import webpack from 'webpack';
import { BuildOptions } from './types/configTypes';

export default function buildResolvers(options:BuildOptions): webpack.ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules:[options.paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias:{}
  };
}
