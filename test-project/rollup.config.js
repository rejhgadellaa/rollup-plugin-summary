import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import summary from "../index";

export default {
  input: "index.js",
  output: {
    dir: "temp",
    format: "esm",
    esModule: true,
    preserveModules: true,
  },
  plugins: [
    resolve(),
    commonjs(),
    summary({
      warnLow: 200,
      warnHigh: 800,
      totalLow: 1e3,
      totalHigh: 2e3,
    }),
  ],
};