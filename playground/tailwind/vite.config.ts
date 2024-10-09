import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [vue()],
	build: {
		// to make tests faster
		minify: false,
	},
});
