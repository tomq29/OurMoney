export enum BuildMode {
  production = 'production',
  development = 'development',
}

export interface BuildPath {
  entry: string;
  output: string;
  htlm: string;
  src: string
}

export interface BuildEnv {
  mode: BuildMode;
  port: number;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPath;
  isDev: boolean;
  port: number;
}
