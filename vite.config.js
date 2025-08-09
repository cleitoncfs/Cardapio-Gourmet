import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import imagePresets from "vite-plugin-image-presets";

export default defineConfig({
    plugins: [react(), imagePresets()],
    build: {
        outDir: "dist",
    },
});
