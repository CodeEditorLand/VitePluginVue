import vuePlugin from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [
		vuePlugin({
			features: {
				componentIdGenerator: (filename) => {
					return filename
						.replace(/\.\w+$/, "")
						.replace(/[^a-z0-9]/gi, "-")
						.toLowerCase();
				},
			},
		}),
	],
	build: {
		// to make tests faster
		minify: false,
	},
});
