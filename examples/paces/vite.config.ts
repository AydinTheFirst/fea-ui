import mdx from "@mdx-js/rollup";
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
	plugins: [
		mdx({ jsxImportSource: "react" }),
		tailwindcss(),
		tsconfigPaths(),
		reactRouter(),
	],
	server: {
		port: 5174,
	},
});
