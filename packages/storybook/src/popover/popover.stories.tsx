import { IconButton, OverlayTrigger, Popover } from "@fea-ui/react";
import type { Meta, StoryObj } from "@storybook/react";
import { LucideBellRing } from "lucide-react";

const meta: Meta<typeof Popover> = {
	component: Popover,
	title: "Components/Popover",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
	render: (args) => (
		<OverlayTrigger>
			<IconButton>
				<LucideBellRing />
			</IconButton>
			<Popover {...args}>
				<p>You have new notifications!</p>
			</Popover>
		</OverlayTrigger>
	),
};
