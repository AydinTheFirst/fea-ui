declare module "*.mdx" {
	import type { MDXComponent } from "@mdx-js/react";
	const Component: MDXComponent;
	export default Component;
}
