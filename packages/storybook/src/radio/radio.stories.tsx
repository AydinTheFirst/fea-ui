import { Label, Radio, RadioGroup } from "@fea-ui/react";
import type { Meta, StoryObj } from "@storybook/react";
import { useId } from "react";

const meta: Meta<typeof RadioGroup> = {
	component: RadioGroup,
	title: "Components/Radio",
};

export default meta;
type Story = StoryObj<typeof meta>;

const items = [
	{ label: "Fuji Apple", value: "fuji-apple" },
	{ label: "Granny Smith", value: "granny-smith" },
	{ label: "Honeycrisp", value: "honeycrisp" },
];

export const Default: Story = {
	render: (args) => {
		const id = useId();

		return (
			<RadioGroup
				{...args}
				aria-label="Fruits"
				aria-labelledby={id}
				defaultValue="granny-smith"
			>
				<h3 className="mb-2 font-medium text-lg" id={id}>
					Select your favorite apple:
				</h3>
				{items.map((item) => (
					<Label key={item.value}>
						<Radio value={item.value}>
							<Radio.Indicator />
						</Radio>
						{item.label}
					</Label>
				))}
			</RadioGroup>
		);
	},
};
