import {
	Button,
	Description,
	FieldError,
	Form,
	Input,
	Label,
	Textarea,
	TextField,
} from "@fea-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Form> = {
	title: "Components/Form",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<Form className="w-full max-w-sm" onSubmit={(e) => e.preventDefault()}>
			<TextField isRequired>
				<Label>Username</Label>
				<Input />
				<Description>Your unique username to login.</Description>
				<FieldError />
			</TextField>

			<TextField isRequired>
				<Label>Password</Label>
				<Input type="password" />
				<Description>Must be at least 8 characters long.</Description>
				<FieldError />
			</TextField>

			<TextField>
				<Label>About You</Label>
				<Textarea rows={4} />
				<Description>Tell us a bit about yourself.</Description>
				<FieldError />
			</TextField>

			<Button className="w-full" type="submit">
				Submit
			</Button>
		</Form>
	),
};
