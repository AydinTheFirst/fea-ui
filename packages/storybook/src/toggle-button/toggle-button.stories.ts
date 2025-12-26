import { buttonVariants, ToggleButton } from "@fea-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ToggleButton> = {
	args: {
		children: "This is a toggle-button text.",
	},
	argTypes: {
		size: {
			control: "radio",
			options: Object.keys(buttonVariants.variants.size),
		},
		variant: {
			control: "radio",
			options: Object.keys(buttonVariants.variants.variant),
		},
	},
	component: ToggleButton,
	title: "Components/ToggleButton",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};
