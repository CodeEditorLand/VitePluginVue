import vuePlugin from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

export default defineConfig({
	base: "/foo/",
	resolve: {
		alias: {
			"@": __dirname,
		},
	},
	plugins: [vuePlugin()],
	build: {
		// to make tests faster
		minify: false,
	},
});
