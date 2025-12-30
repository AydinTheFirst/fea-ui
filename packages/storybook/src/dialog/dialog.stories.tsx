import { Button, buttonVariants, Dialog, Form, Input } from "@fea-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Dialog> = {
	args: {
		children: "This is a dialog text.",
	},
	component: Dialog,
	title: "Components/Dialog",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: (args) => (
		<Dialog.Root {...args}>
			<Dialog.Trigger className={buttonVariants()}>Open Dialog</Dialog.Trigger>
			<Dialog.Portal>
				<Dialog.Backdrop />
				<Dialog.Popup>
					<Dialog.Close />
					<Dialog.Title>Dialog Title</Dialog.Title>
					<Dialog.Description>
						This is the description of the dialog.
					</Dialog.Description>

					<Form className="my-4" onSubmit={(e) => e.preventDefault()}>
						<Input.Root>
							<Input.Label>Username</Input.Label>
							<Input.Control required />
						</Input.Root>

						<Button className="w-full" type="submit">
							Submit
						</Button>
					</Form>

					<div className="flex justify-end gap-2"></div>
				</Dialog.Popup>
			</Dialog.Portal>
		</Dialog.Root>
	),
};
