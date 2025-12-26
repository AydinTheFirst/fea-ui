import { Checkbox, Label } from "@fea-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Checkbox> = {
	args: {
		children: "This is a checkbox text.",
	},
	component: Checkbox,
	title: "Components/Checkbox",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
	render: (args) => (
		<Label>
			<Checkbox.Root {...args} aria-label="Accept Terms">
				<Checkbox.Indicator />
			</Checkbox.Root>
			Accept terms
		</Label>
	),
};
