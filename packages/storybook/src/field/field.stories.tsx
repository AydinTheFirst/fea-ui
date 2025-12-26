import { Field, fieldVariants } from "@fea-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Field> = {
	args: {
		size: "md",
	},
	argTypes: {
		size: {
			control: { type: "radio" },
			options: Object.keys(fieldVariants.variants.size),
		},
	},
	component: Field,
	title: "Components/Field",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
	render: (args) => (
		<Field {...args}>
			<Field.Label>Username</Field.Label>
			<Field.Control required />
			<Field.Description>your username</Field.Description>
			<Field.Error />
		</Field>
	),
};
