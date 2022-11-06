import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import analyze from "rollup-plugin-analyzer";
import dts from "rollup-plugin-dts";
import json from "@rollup/plugin-json";
import {terser} from "rollup-plugin-terser";
import packageJson from "./package.json";

export default [
  {
    input: {
      index: "lib/index.ts",
    },
    output: [
      {
        dir: "dist/cjs",
        format: "cjs",
        sourcemap: true,
      },
      {
        dir: "dist/esm",
        format: "esm",
        exports: "named",
        sourcemap: true,
      },
    ],
    external: [
      ...Object.keys(packageJson.peerDependencies),
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        clean: true
      }),
      terser(),
      json(),
      postcss(),
      analyze({
        hideDeps: true,
        summaryOnly: true,
      }),
    ],
  },
  {
    input: "lib/index.ts",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [dts()],
  },
];