const svelte = require("rollup-plugin-svelte");
const ts = require("rollup-plugin-ts");
const json = require("@rollup/plugin-json");
const resolve = require("@rollup/plugin-node-resolve");
const typescript = require("@rollup/plugin-typescript");

const isDev = process.env.NODE_ENV === "development";

const plugins = {
    plugins: [
        resolve({
            dedupe: ["svelte"],
        }),
        typescript({
            sourceMap: isDev,
        }),
        svelte({
            dev: isDev,
            extensions: [".svelte"],
        }),
        json(),
    ],
};

module.exports = [
    {
        input: "src/index.js",
        output: [
            {
                file: "dist/index.js",
                format: "es",
            },
        ],

        ...plugins,
    },
];
