import vuePlugin from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

export default defineConfig({
	base: "",
	resolve: {
		alias: {
			"@": __dirname,
		},
	},
	plugins: [vuePlugin()],
	server: {
		origin: "http://localhost/server-origin/test",
	},
	build: {
		// to make tests faster
		minify: false,
	},
});
