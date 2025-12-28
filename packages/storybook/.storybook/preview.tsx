import "../src/styles.css";

import { withThemeByClassName } from "@storybook/addon-themes";
import type { Preview, ReactRenderer } from "@storybook/react-vite";

const preview: Preview = {
	decorators: [
		withThemeByClassName<ReactRenderer>({
			defaultTheme: "light",
			themes: {
				dark: "dark",
				light: "light",
			},
		}),
		(Story) => {
			return (
				<div className="isolate flex min-h-screen items-center justify-center bg-background text-foreground">
					<Story />
				</div>
			);
		},
	],
};

export default preview;
