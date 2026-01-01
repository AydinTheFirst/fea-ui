import {
	Description,
	FieldError,
	Input,
	Label,
	TextField,
} from "@fea-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TextField> = {
	argTypes: {},
	component: TextField,
	title: "Components/TextField",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: (args) => (
		<div className="w-full max-w-sm">
			<TextField {...args}>
				<Label>Username</Label>
				<Input placeholder="Enter your username" />
				<Description>Your unique username to login.</Description>
				<FieldError />
			</TextField>
		</div>
	),
};
