import { Select } from "@fea-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Select> = {
	component: Select,
	title: "Components/Select",
};

export default meta;
type Story = StoryObj<typeof meta>;

const fonts = [
	{ label: "Select a font", value: null },
	{ label: "Arial", value: "arial" },
	{ label: "Verdana", value: "verdana" },
	{ label: "Helvetica", value: "helvetica" },
];

export const Default: Story = {
	render: (args) => (
		<div className="w-full max-w-xs">
			<Select {...args} items={fonts}>
				<Select.Trigger>
					<Select.Value />
					<Select.Icon />
				</Select.Trigger>
				<Select.Portal>
					<Select.Positioner sideOffset={8}>
						<Select.Popup>
							<Select.List>
								{fonts.map((font) => (
									<Select.Item key={font.value} value={font.value}>
										<Select.ItemText>{font.label}</Select.ItemText>
										<Select.ItemIndicator />
									</Select.Item>
								))}
							</Select.List>
						</Select.Popup>
					</Select.Positioner>
				</Select.Portal>
			</Select>
		</div>
	),
};
