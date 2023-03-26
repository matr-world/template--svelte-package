import { svelte } from "@sveltejs/vite-plugin-svelte";
import path from "path";
import { defineConfig } from "vite";

export default defineConfig(({ command, mode }) => {
    const isProduction = mode === "production";

    return {
        plugins: [svelte()],
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "../"),
            },
        },
    };
});
