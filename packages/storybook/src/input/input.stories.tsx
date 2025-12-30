import { Input, inputVariants } from "@fea-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Input> = {
	argTypes: {
		size: {
			control: { type: "radio" },
			options: Object.keys(inputVariants.variants.size),
		},
	},
	component: Input,
	title: "Components/Input",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: (args) => (
		<div className="w-full max-w-sm">
			<Input.Root {...args}>
				<Input.Label>Username</Input.Label>
				<Input.Control placeholder="Enter your username" />
				<Input.Description>Your unique username to login.</Input.Description>
				<Input.ErrorMessage />
			</Input.Root>
		</div>
	),
};
