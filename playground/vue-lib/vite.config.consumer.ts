import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

export default defineConfig({
	root: __dirname,
	build: {
		outDir: "dist/consumer",
	},
	plugins: [vue()],
});
