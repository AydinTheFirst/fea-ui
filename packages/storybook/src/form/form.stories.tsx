import { Button, Checkbox, Field, Form } from "@fea-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Form> = {
	title: "Components/Form",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<Form onSubmit={(e) => e.preventDefault()}>
			<Field.Root>
				<Field.Label>Username</Field.Label>
				<Field.Control required />
				<Field.Description>your username</Field.Description>
				<Field.Error />
			</Field.Root>

			<Field.Root>
				<Checkbox.Root>
					<Checkbox.Indicator />
				</Checkbox.Root>
				<Field.Label>Password</Field.Label>
			</Field.Root>

			<Button className="w-full" type="submit">
				Submit
			</Button>
		</Form>
	),
};
