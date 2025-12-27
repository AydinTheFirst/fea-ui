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
				<div className="bg-background text-foreground isolate flex min-h-screen items-center justify-center">
					<Story />
				</div>
			);
		},
	],
};

export default preview;
