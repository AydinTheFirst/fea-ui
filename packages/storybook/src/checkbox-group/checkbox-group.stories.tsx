import { Checkbox, CheckboxGroup, Label } from "@fea-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof CheckboxGroup> = {
	args: {
		children: "This is a checkbox-group text.",
	},
	component: CheckboxGroup,
	title: "Components/CheckboxGroup",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<CheckboxGroup>
			<Label>
				<Checkbox.Root>
					<Checkbox.Indicator />
				</Checkbox.Root>
				This is a checkbox-group text.
			</Label>
			<Label>
				<Checkbox.Root defaultChecked>
					<Checkbox.Indicator />
				</Checkbox.Root>
				This is a checked checkbox.
			</Label>
		</CheckboxGroup>
	),
};
