import { Label } from "@fea-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Label> = {
	args: {
		children: "This is a label text.",
	},
	component: Label,
	title: "Components/Label",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
