import { Text } from "@fea-ui/react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Text> = {
	component: Text,
	title: "Components/Text",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
	render: () => {
		return <Text className="text-primary">Hello World</Text>;
	},
};
