import { Link } from "@fea-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Link> = {
	args: {
		children: "This is a link text.",
		href: "#",
	},
	component: Link,
	title: "Components/Link",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};

export const NoUnderline: Story = {
	args: {
		variant: "no-underline",
	},
};

export const Underline: Story = {
	args: {
		variant: "underline",
	},
};

export const Disabled: Story = {
	render: (args) => <Link {...args} data-disabled />,
};
