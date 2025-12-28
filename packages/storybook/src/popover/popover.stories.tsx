import { IconButton, Popover } from "@fea-ui/react";
import type { Meta, StoryObj } from "@storybook/react";
import { LucideBellRing, LucideChevronUp } from "lucide-react";

const meta: Meta<typeof Popover> = {
	component: Popover,
	title: "Components/Popover",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
	render: (args) => (
		<Popover {...args}>
			<Popover.Trigger>
				<IconButton>
					<LucideBellRing />
				</IconButton>
			</Popover.Trigger>
			<Popover.Portal>
				<Popover.Positioner sideOffset={8}>
					<Popover.Arrow>
						<LucideChevronUp />
					</Popover.Arrow>
					<Popover.Popup>
						<Popover.Title>Notifications</Popover.Title>
						<Popover.Description>
							You have 3 new notifications.
						</Popover.Description>
					</Popover.Popup>
				</Popover.Positioner>
			</Popover.Portal>
		</Popover>
	),
};
