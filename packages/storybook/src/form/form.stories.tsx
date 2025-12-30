import { Button, Checkbox, Form, Input, Label } from "@fea-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Form> = {
	title: "Components/Form",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<Form className="w-full max-w-sm" onSubmit={(e) => e.preventDefault()}>
			<Input.Root>
				<Input.Label>Username</Input.Label>
				<Input.Control placeholder="Enter your username" required />
				<Input.Description>Your unique username to login.</Input.Description>
			</Input.Root>

			<Input.Root>
				<Input.Label>Password</Input.Label>
				<Input.Control
					placeholder="Enter your password"
					required
					type="password"
				/>
				<Input.Description>Your secure password.</Input.Description>
			</Input.Root>

			<Label>
				<Checkbox.Root>
					<Checkbox.Indicator />
				</Checkbox.Root>
				Remember me
			</Label>

			<Button className="w-full" type="submit">
				Submit
			</Button>
		</Form>
	),
};
