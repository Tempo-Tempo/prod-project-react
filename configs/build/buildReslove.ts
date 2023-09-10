import webpack from 'webpack'
export function bulidResolve(): webpack.ResolveOptions {
   return {
      extensions: [".tsx", ".ts", ".js"],
   }
}