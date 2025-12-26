import { defineConfig } from "tsdown";

export default defineConfig({
	dts: true,
	entry: ["src/index.ts"],
	external: ["react", "react-dom", "react/jsx-runtime"],
	format: ["esm", "cjs"],
	sourcemap: true,
});
