import { Select } from "@fea-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Select> = {
	component: Select,
	title: "Components/Select",
};

export default meta;
type Story = StoryObj<typeof meta>;

const fonts = [
	{ label: "Select a font", value: "" },
	{ label: "Arial", value: "arial" },
	{ label: "Verdana", value: "verdana" },
	{ label: "Helvetica", value: "helvetica" },
];

export const Default: Story = {
	render: (args) => (
		<div className="w-full max-w-xs">
			<Select.Root {...args}>
				<Select.Label>Choose your favorite font</Select.Label>
				<Select.Control>
					{fonts.map((font) => (
						<Select.Option key={font.value} {...font} />
					))}
				</Select.Control>
				<Select.Description>
					Select the font that will be used in the editor.
				</Select.Description>
				<Select.Error>Please select a font to proceed.</Select.Error>
			</Select.Root>
		</div>
	),
};
