import commonjs from "@rollup/plugin-commonjs";
import resolve from '@rollup/plugin-node-resolve'
import typescript from "@rollup/plugin-typescript";

export default {
  input: 'src/main.ts',
  output: {
    dir: 'dist',
    format: 'es',
  },
  plugins: [
    resolve({exportConditions:['ts', 'default', 'module', 'import']}),
    commonjs(),
    typescript()
  ],
};
