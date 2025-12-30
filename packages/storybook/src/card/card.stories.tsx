import { Button, Card, cardVariants, Form, Input } from "@fea-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Card> = {
	args: {
		children: "This is a card text.",
	},
	argTypes: {
		variant: {
			control: "radio",
			options: Object.keys(cardVariants.variants.variant),
		},
	},
	component: Card,
	title: "Components/Card",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: (args) => (
		<Card {...args}>
			<Card.Header>
				<Card.Title>Card Title</Card.Title>
				<Card.Description>Card Description</Card.Description>
			</Card.Header>
			<Card.Body>
				<Form>
					<Input>
						<Input.Label>Username</Input.Label>
						<Input.Control required />
					</Input>

					<Input>
						<Input.Label>Password</Input.Label>
						<Input.Control required type="password" />
					</Input>

					<Button className="w-full" type="submit">
						Submit
					</Button>
				</Form>
			</Card.Body>
			<Card.Footer className="justify-end">
				<Button variant="danger">Cancel</Button>
			</Card.Footer>
		</Card>
	),
};
