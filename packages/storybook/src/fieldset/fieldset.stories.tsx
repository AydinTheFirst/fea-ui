import { Fieldset } from "@fea-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Fieldset> = {
	component: Fieldset,
	title: "Components/Fieldset",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: (args) => (
		<Fieldset {...args}>
			<Fieldset.Legend>Fieldset Legend</Fieldset.Legend>
			<div className="mt-2">
				This is an example of a fieldset component with a legend.
			</div>
		</Fieldset>
	),
};
